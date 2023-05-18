import Page from '@/components/page';
import { META_DESCRIPTION } from '@/lib/constants';
import Layout from '@/components/layout';

export default function Home() {
  const meta = {
    title: 'Demo - Virtual Event Starter Kit',
    description: META_DESCRIPTION
  };


  return (
    <Page meta={meta} fullViewport>
      <Layout>
        <h1>Testing</h1>
      </Layout>
      
    </Page>
  );
}