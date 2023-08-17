import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"

const Tid = () => {

  const tidSort = [' 1 uke',' 2 uker',' Mer enn 2 uker']
  return (
    <>
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown/>}>Tid</MenuButton>

      <MenuList>
        {tidSort.map(value=><MenuItem key={value}>{value}</MenuItem>)}
      </MenuList>
    </Menu>
    </>
  )
}

export default Tid