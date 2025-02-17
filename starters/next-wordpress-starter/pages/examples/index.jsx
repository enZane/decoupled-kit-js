import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { setEdgeHeader } from '@pantheon-systems/wordpress-kit';

import PageHeader from '../../components/page-header';
import Layout from '../../components/layout';

import { getFooterMenu } from '../../lib/Menus';

export default function ExamplesPageTemplate({ menuItems }) {
	return (
		<Layout footerMenu={menuItems}>
			<NextSeo
				title="Decoupled Next WordPress - Examples"
				description="Generated by create next app."
			/>
			<PageHeader title="Examples" />
			<section className="prose lg:prose-xl mt-10 flex flex-col mx-auto max-h-screen">
				<div className="max-w-lg mx-auto lg:grid-cols-3 lg:max-w-screen-lg">
					<p>
						This page outlines a growing list of common use cases that can be
						used as a reference when building using this starter kit. If you
						don&apos;t need them for your site, feel free to delete the
						`pages/examples` directory in your codebase.
					</p>
					<ul>
						<li>
							<Link href="/examples/auth-api">API Authorization</Link> -
							confirms that Next.js is able to make authenticated requests to
							Drupal&apos;s API.
						</li>
						<li>
							<Link href="/examples/ssg-isr">SSG and ISR</Link> - by default,
							this starter kit is optimized for SSR and Edge Caching on
							Pantheon. This example is provided for cases where Next.js static
							generation options would be beneficial.
						</li>
					</ul>
				</div>
			</section>
		</Layout>
	);
}

export async function getServerSideProps({ res }) {
	const menuItems = await getFooterMenu();
	setEdgeHeader({ res });

	return {
		props: {
			menuItems,
		},
	};
}
