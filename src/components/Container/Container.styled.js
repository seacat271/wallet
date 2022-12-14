import styled from 'styled-components';
import BlurImg from '../../assets/images/rectangle.png';
import BlurImgMd from '../../assets/images/rectangle_md.png';

const Container = styled.div`
  background-color: ${props => props.theme.colors.background.blurTablet};
  ${props => props.theme.breakpoints.tab} {
    background-image: url(${BlurImgMd});
    background-repeat: no-repeat;
    background-size: cover;
  }
  ${props => props.theme.breakpoints.desc} {
    background-image: url(${BlurImg});
  }
  min-height: calc(100vh - 60px);

  @media screen and (min-width: 768px) {
    min-height: calc(100vh - 85px);
  }
`;

export default Container;
