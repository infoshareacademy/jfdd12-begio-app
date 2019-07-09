import React from "react";
import range from "lodash/range";
import styled from "styled-components";
import ItemsCarousel from "react-items-carousel";

const noOfItems = 4;
const noOfCards = 1;
const chevronWidth = 40;

const Wrapper = styled.div`
  padding: 0 ${chevronWidth}px;
  max-width: 800px;
  margin: 0 auto;
`;

const SlideItem = styled.div`
  height: 400px;
  background: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
`;

class AutoPlayCarousel extends React.Component {
  state = {
    activeItemIndex: 0
  };

  onChange = value => this.setState({ activeItemIndex: value });

  render() {
    return (
      <Wrapper>
        <ItemsCarousel
          gutter={12}
          numberOfCards={noOfCards}
          activeItemIndex={this.state.activeItemIndex}
          requestToChangeActive={this.onChange}
          rightChevron={<button>{">"}</button>}
          leftChevron={<button>{"<"}</button>}
          chevronWidth={chevronWidth}
          outsideChevron
          children={this.props.images.map((url, index) => (
            <SlideItem key={index}>
              <img src={url} alt="zdjecie wydarzenia" />
            </SlideItem>
          ))}
        />
      </Wrapper>
    );
  }
}

export default AutoPlayCarousel;
