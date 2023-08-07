import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"


const ButtonMenu = () => {
  return (
   <>
   <Menu>
    <MenuButton as={Button} >Meny</MenuButton>
    <MenuList>
        <MenuItem>Opprett konto</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
    </MenuList>
    
    



   </Menu>
   </>
  )
}

export default ButtonMenu