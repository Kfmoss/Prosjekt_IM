import styled, {keyframes} from 'styled-components';


const AlternativeBlink = () => (
    <Underscore>
        _
    </Underscore>

);


  


export default AlternativeBlink;

const blink = keyframes`
0%{opacity:1;} 
49%{opacity:1;}
50%{opacity:0;}
100%{opacity:0;}`;

const Underscore = styled.div`
    animation: ${blink} 2s infinite`;    
