import { NextSeo } from "next-seo";
import { isMultiLanguage } from "../../lib/isMultiLanguage";
import {
  getCurrentLocaleStore,
  globalDrupalStateStores,
} from "../../lib/drupalStateContext";

import { RecipeGridItem, withGrid } from "../../components/grid";
import Layout from "../../components/layout";
import PageHeader from "../../components/page-header";

// This file can safely be removed if the Drupal
// instance is not sourcing Umami data
export default function RecipeListTemplate({
  recipes,
  hrefLang,
  multiLanguage,
}) {
  const RecipeGrid = withGrid(RecipeGridItem);

  return (
    <Layout>
      <NextSeo
        title="Decoupled Next Drupal Demo"
        description="Generated by create next app."
        languageAlternates={hrefLang || false}
      />
      <PageHeader title="Recipes" />
      <section>
        <RecipeGrid
          data={recipes}
          contentType="recipes"
          multiLanguage={multiLanguage}
        />
      </section>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const origin = process.env.NEXT_PUBLIC_FRONTEND_URL;
  const { locales, locale } = context;
  const multiLanguage = isMultiLanguage(locales);

  const hrefLang = locales.map((locale) => {
    return {
      hrefLang: locale,
      href: origin + "/" + locale,
    };
  });

  const store = getCurrentLocaleStore(locale, globalDrupalStateStores);

  store.params.clear();
  store.params.addInclude([
    "field_media_image.field_media_image",
    "field_recipe_category",
  ]);

  try {
    const recipes = await store.getObject({
      objectName: "node--recipe",
      query: `{
        id
        title
        field_media_image
        field_recipe_category
        field_recipe_instruction
        path
      }`,
    });

    return {
      props: {
        recipes,
        hrefLang,
        multiLanguage,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error("Unable to fetch recipes: ", error);
    return {
      props: {},
    };
  }
}
