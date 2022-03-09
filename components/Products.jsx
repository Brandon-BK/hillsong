import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import TuneIcon from '@mui/icons-material/Tune';

const Products = () => {
  return (
    <div style={{width:'100%',padding:'0 45px 0 15px',display:'flex',justifyContent:'space-between'}}>
        <div style={{width:300,height:275,display:'flex',flexDirection:'column'}}>
            <div style={{flex:1,borderTop:'1px solid grey',display:'flex',justifyContent:'space-between',alignItems:'center'}}>

            <div style={{display:'flex',alignItems:'center'}}>
                <TuneIcon />
                <p style={{marginLeft:10}}>Filter</p>
            </div>

            <a style={{textDecoration:'underline',fontSize:13}}>clear</a>
            </div>

            <div style={{flex:1,borderTop:'1px solid grey',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <p>Genre</p>
                <AddIcon />
            </div>


            <div style={{flex:1,borderTop:'1px solid grey',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <p>Artist</p>
            <AddIcon />
            </div>


            <div style={{flex:1,borderTop:'1px solid grey',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <p>Categories</p>
            <AddIcon />
            </div>


            <div style={{flex:1,borderTop:'1px solid grey',borderBottom:'1px solid grey',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <p>Brand</p>
            <AddIcon />
            </div>
        </div>

        <div style={{width:870,border:'1px solid green',height:800}}>

        <div style={{height:34,border:'1px solid grey',alignItems:'center',display:'flex',borderRadius:'5px',width:166,color:'grey',fontSize:14,alignItems:'center',justifyContent:'center'}}>
           <p><span style={{fontWeight:'bold',color:'black'}}>Category: </span> worship x</p>
        </div>

        
        </div>
    </div>
  )
}

export default Products