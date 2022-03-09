import React from 'react'
import styles from '../styles/Home.module.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const NavBar = () => {
  return (
    <div style={{width:"100%",height:359,backgroundImage:`url(bg1.jpg)`,backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover',objectFit:'cover',paddingTop:10,margin:'0 0 20px'}}>

        <nav style={{width:'100%',height:80,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <div style={{width:200,height:80,display:'flex',alignItems:'center'}}>
                <img src="./logo.svg" height="60px" width="180px" />
            </div>



            <div style={{width:600,height:80,display:'flex'}}>
                <p style={{flex:1,display:'flex',alignItems:'center',justifyContent:'center',fontSize:14}}><a className={styles.links} style={{cursor:'pointer'}}>BOOKS</a></p>
                <p style={{flex:1,display:'flex',alignItems:'center',justifyContent:'center',fontSize:14}}><a className={styles.links} style={{cursor:'pointer'}}>MUSIC</a></p>
                <p style={{flex:1,display:'flex',alignItems:'center',justifyContent:'center',fontSize:14}}><a className={styles.links} style={{cursor:'pointer'}}>TEACHING</a></p>
                <p style={{flex:1,display:'flex',alignItems:'center',justifyContent:'center',fontSize:14}}><a className={styles.links} style={{cursor:'pointer'}}>CARRICULUM</a></p>
                <p style={{flex:1,display:'flex',alignItems:'center',justifyContent:'center',fontSize:14}}><a className={styles.links} style={{cursor:'pointer'}}>APPAREL</a></p>
                <p style={{flex:1,display:'flex',alignItems:'center',justifyContent:'center',fontSize:14}}><a className={styles.links} style={{cursor:'pointer'}}>POSTERS</a></p>
            </div>


            
            <div style={{width:500,height:80,display:'flex',border:"1px solid green",fontSize:13,alignItems:'center',paddingLeft:40}}>
                <div>
                    <img src="./flag.png" height="17px" width="21px" />
                </div>
                <p style={{marginLeft:5,marginRight:20}}>USD - US Dollar</p>
                <KeyboardArrowDownIcon />
            </div>
            
        </nav>
        <div style={{fontSize:12,paddingLeft:30,marginTop:10}}>Home/Book</div>

        <h1 style={{fontSize:34,fontWeight:'lighter',marginTop:65,padding:'0 0 0 90px'}}>Worship</h1>
        
    </div>
  )
}

export default NavBar