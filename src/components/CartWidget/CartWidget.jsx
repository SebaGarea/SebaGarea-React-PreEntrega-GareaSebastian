import { LuShoppingCart } from "react-icons/lu";//importamos el icono de react icon

const CartWidget = () =>{
    return (
        <div style={{display:'flex', marginRight:'1.25rem',alignItems:'center', width:'2.5rem', justifyContent:'space-between'}}>
        <LuShoppingCart size={28} />
        1
        </div>
    );
};

export default CartWidget;