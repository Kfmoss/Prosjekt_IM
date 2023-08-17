import { Button, Menu, MenuButton, MenuGroup, MenuItem, MenuList, MenuDivider } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"


const ArbeidsType = () => {
  const pSpråk =['Python', 'HTML-CSS', 'javaScript', 'C#'];
  const nettverk =['LAN','IP', 'WireShark', 'SSH' ];
  const  DB =['SQLdataBase', 'NoSQLdataBase'];


  return (
    <>
    <Menu>
      <MenuButton margin={'5px'} as={Button} rightIcon={<BsChevronDown/>}>IT-prosjekter</MenuButton>

      <MenuList >
          <MenuGroup title="Programmering">
            {pSpråk.map(value=><MenuItem key={value}>{value}</MenuItem>)}

          </MenuGroup>
        <MenuDivider />
          <MenuGroup title="Nettverk">
          {nettverk.map(value=><MenuItem key={value}>{value}</MenuItem>)}

          </MenuGroup>
        <MenuDivider />
          <MenuGroup title="Databaser">
          {DB.map(value=><MenuItem key={value}>{value}</MenuItem>)}

          </MenuGroup>

      </MenuList>

    </Menu>
    
    </>
  )
}

export default ArbeidsType