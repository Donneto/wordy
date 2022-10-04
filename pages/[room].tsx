import { useRouter } from 'next/router';

const Room = () => {
  const router = useRouter();
  const { room } = router.query;

  return (
    <>
      <h1>{room}</h1>
    </>
  );
};

export default Room;
