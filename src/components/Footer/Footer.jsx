import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import RoomIcon from '@mui/icons-material/Room';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';

const Container = styled.div`
display: flex;

`
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Logo = styled.h1`

`
const Desc = styled.p`
margin: 20px 30px 20px 0;
`
const SocialContainer = styled.div`
  display: flex;
`

const SocialIcon = styled.h1`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${(props) => props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;

`

const Center = styled.div`
flex:1
padding: 20px;
`

const Title = styled.h3`
margin-bottom: 30px;
`
const List = styled.ul`
margin:0;
padding:0;
display: flex;
flex-wrap:wrap;
`
const ListItem = styled.li`
width:50%;
margin-bottom:15px;
list-style:none;
cursor: pointer;
`

const Right = styled.div`
flex:1

`
const ContactItem= styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`
const Payment= styled.img`
width: 50%;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Lorien.</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
      <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
      <Title>Contact</Title>
        <ContactItem>
          <RoomIcon style={{marginRight:"10px"}}/> 246 Tamriel , South Elsweyer 12345
        </ContactItem>
        <ContactItem>
          <PhoneIcon style={{marginRight:"10px"}}/> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailIcon style={{marginRight:"10px"}} /> contact@lorien.dev
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
}

export default Footer