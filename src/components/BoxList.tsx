import Box from './Box';

function BoxList() {
  const boxData: string[] = ['1', '2', '3', '4'];
  return (
    <>
      {boxData.map((text) => (
        <Box text={text} />
      ))}
    </>
  );
}

export default BoxList;
