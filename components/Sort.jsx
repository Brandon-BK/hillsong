import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Sort = () => {
  return (
    <div style={{height:52,width:'73%',float:'right',alignItems:'center',display:'flex',justifyContent:'space-between',margin:'25px 45px',fontSize:13}}>

       <div style={{height:'100%',alignItems:'center',display:'flex',color:'grey'}}>
        <p>Showing <span style={{fontWeight:'bold',color:'black'}}>24</span> of <span style={{fontWeight:'bold',color:'black'}}>50 products</span></p>
       </div>

       <div style={{height:'100%',border:'1px solid grey',alignItems:'center',display:'flex',borderRadius:'5px',width:194,color:'grey',fontSize:14,alignItems:'center',display:'flex',justifyContent:'center'}}>
           <p style={{marginRight:20}}>Sort By:</p>
            <KeyboardArrowDownIcon />
        </div>

    </div>
  )
}

export default Sort