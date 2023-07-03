import Layout from '@/layouts/Layout';
import Welcome from '@/components/Welcome';
import BeshyGenerator from '@/components/BeshyGenerator';

const Home = () => {
  return (
    <Layout>
      <Welcome />
      <BeshyGenerator />
    </Layout>
  )
}

export default Home