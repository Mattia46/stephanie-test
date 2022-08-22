import Link from 'next/link'
import { useRouter } from 'next/router'
import { ShipCard } from "@containers/ship/ShipCard";
import { useQuery } from '@apollo/client';
import { GET_SHIP } from '@api/ship/queries/getShips';
import { Ship } from '@api/ship/types';

// I used SSR because it handle most scenarios
// It'd be better to use getStaticProps for SSG
export async function getServerSideProps(context: any) {
  const { id } = context.query;
  const url = `http:localhost:3000/${id}`;

  return {
    props: {
      title: id,
      description: `${context.query.id}`,
      url,
    },
  };
}

const CardDetails = () => {
  const router = useRouter()
  const { id } = router.query

  // this condition will prevent to call the resolver with an empty variable id
  if(!id) return null;

  const { data, loading, error } = useQuery<{ship: Ship}>(GET_SHIP, {
    variables: { id }
  })

  // By throwing an error we can gratefully handle it through React Error Boundary
  if(error) throw error;
  if(loading) return <div>Loading...</div>;

  // For this demo purpose we are reusing the ShipCard component
  return (
    <>
      <Link href="/">Back to list</Link>
      <ShipCard ship={data?.ship} loading={loading}/>
    </>
  )
}

export default CardDetails;
