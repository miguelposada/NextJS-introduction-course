const DocsPage = ({ params }: { params: { id: string } }) => {
  console.log(params);

  return (
    <div>
      prueba de id
      {params.id}
    </div>
  );
};

export default DocsPage;
