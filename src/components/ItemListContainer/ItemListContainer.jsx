const ItemListContainer = ({ greeting }) => {
    return <div style={{ fontSize: "2rem", fontWeight: "bold", height:"90vh", width:"100vw", display:"flex", alignItems:"start", justifyContent:"center",
        marginTop:"1.25rem ",
     }}>{greeting}</div>;
};

export default ItemListContainer;
