import React, { useEffect, useState } from "react";
import "./index.css";
import Icons from "../../components/icons";
import { Drawer, List, ListItem, ListItemText, Box, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Outlet, } from "react-router-dom";
import BoxLoading from "../../components/boxLoading";
import SimpleLoading from "../../components/simpleLoading";
import Footer from "./footer";
import { navigateTo } from "../../utils/tools";
import SnackBars from "../../components/snackBar";
import { useDispatch } from "react-redux";

const Layout = (props) => {

    const { children } = props;

    const [menu, setMenu] = useState(false);
    const [profileDialogue, setProfileDialogue] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const [error, setError] = useState(false);
    const [succes, setSuccess] = useState(false);
    const [message, setMessage] = useState(false);
    const [snack, setsnack] = useState(false);



    function setSnack(error, message,callback) {

        if (error) {
            setError(true);
        }
        else {
            setSuccess(true);
        }
        setsnack(true);
        setMessage(message);

        setTimeout(()=>{
            setError(false);
            setSuccess(false);
            setMessage(false);
            setsnack(false);
            dispatch(callback());

        },5000)

    }


    const profileDialogueSchema = () => {
        return [
            {
                name: "Profile",
                url: "/home",
            },
            {
                name: "Login",
                url: "/login",
            },
            {
                name: "Register",
                url: "/signup",
            },
        ]
    }

    const menuList = () => {
        const list = [
            { label: "Home", url: '/' },
            { label: 'Settings', url: '/' },
            { label: 'Contact us', url: '/' },
            { label: 'About us', url: '/' },
            { label: 'Feedback', url: '/' }
        ]
        return (
            <>
                <Box
                    sx={{ width: 250, height: 'fit-content' }}
                    role="presentation"
                    onClick={closeMenu}
                    onKeyDown={closeMenu}
                >
                    <List>
                        {list && list.map((e, i) => {
                            return <>

                                <a className="link" href={e?.url}>
                                    <ListItem button key={i} className="link">
                                        <ListItemText primary={e?.label}
                                            className="link"
                                        >{e?.label}</ListItemText>
                                    </ListItem>
                                </a>

                            </>
                        })}
                    </List>
                </Box>
            </>
        )
    }

    const openMenu = () => {
        setMenu(true)
    }

    const closeMenu = () => {
        setMenu(false)
    }

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 6000)
    }, [])


    return (
        <>


            <div className="header">

                <button onClick={openMenu} className="menuBtn"> <Icons type={'menu'} /> </button>



                <div className="btn-holder" >

                    <div className="btn-holder">

                        <a className="btn" href="./login">login</a>
                        <a className="btn" style={{ background: '#0781db', color: 'white' }} href="./signup">signup</a>

                    </div>

                    <div className="profile-holder" onClick={(e) => {
                        e.preventDefault();
                        setProfileDialogue(true);
                        setAnchorEl(e.target);
                    }}>
                        <Icons type='profile' style={{ color: 'white' }} />
                    </div>
                </div>

            </div>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                elevation={0}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={profileDialogue}
                onClose={(e) => {
                    e.preventDefault();
                    setProfileDialogue(false);
                }}
                PaperProps={{
                    style: {
                        marginTop: '50px',
                        background: 'white',
                        boxShadow: '0px 0px 8px 1px gray',
                        color: 'gray',
                        padding: '9px',
                    },
                }}
            >
                {
                    profileDialogueSchema() && profileDialogueSchema()?.map((e, i) => {
                        return <>
                            <a href={e?.url} className="link" >
                                <MenuItem key={i}>{e?.name}</MenuItem>
                            </a>

                        </>
                    })
                }
            </Menu>


            <Drawer
                anchor="left"
                open={menu}
                onClose={closeMenu}
            >
                {menuList()}
            </Drawer>

            <div className="children">

                {/* {loading && <BoxLoading /> } */}
                {/* {loading && <SimpleLoading /> } */}

                <Outlet context={{ setSnack: setSnack }} />

            </div>

            <div className="footer">
                <Footer />
            </div>

            {message && error && <SnackBars error={true} open={snack} message={message} />}
            {message && succes && <SnackBars error={false} open={snack} message={message} />}


        </>
    )

}

export default Layout;