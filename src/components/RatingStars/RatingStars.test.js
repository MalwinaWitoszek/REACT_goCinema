import { mount } from "enzyme";
import React from "react";

import RatingStars, { ratingDescription } from "./RatingStars";

describe("RatingStars component", () => {
  //-----------SETTINGS---------------------

  let props, wrapper, star, description;

  const setup = nextProps => {
    if (!wrapper) {
      wrapper = mount(<RatingStars {...props} {...nextProps} />);
    }

    star = () => wrapper.find('[data-test="star"]');
    description = () => wrapper.find('[data-test="description"]');
    return {
      wrapper,
      star,
      description
    };
  };
  beforeEach(() => {
    // resets wrapper and props before every test so that the state
    // from one test doesn't leak to another
    props = {
      rating: undefined,
      ratingDesc: undefined,
      allowClear: undefined
    };
    wrapper = undefined;
  });

  //-----------END OF SETTINGS---------------------

  //-----------------TESTS---------------------

  //------------------------
  // What component renders
  //------------------------

  it("component always renders a div", () => {
    const { wrapper } = setup();
    expect(wrapper.find("div.container").exists()).toEqual(true);
  }); // end of 'always renders a div'


  //--------------------------------------------
  // What does component do with received props
  //--------------------------------------------

  it("if component does not receive any props he will set default", () => {
    let { wrapper } = setup();
    expect(wrapper.props()).toEqual({
      rating: null,
      ratingDesc: true,
      allowClear: false
    });
  }); //end of 'if component does not receive any props he will set default'

  it('if component receives prop "rating" will use it to set state', () => {
    let { wrapper } = setup();
    expect(wrapper.state().rating).toEqual(0);
    wrapper.unmount();
    let props = {
      rating: 3
    };
    wrapper = mount(<RatingStars {...props} />);
    expect(wrapper.state().rating).toEqual(6);
  }); //end of 'if component receives prop "rating" will use it to set state'


  //--------------------------------------------
  // Rendering Stars
  //--------------------------------------------

  describe("Rating stars", () => {
    it("there are 10 stars that are always rendered", () => {
      const { star } = setup();
      expect(star()).toHaveLength(10);
    });  // end of 'there are 10 stars that are always rendered'

    it("each of stars receives 7 props", () => {
      const { star } = setup();
      let firstStar = star().first();
      expect(Object.keys(firstStar.props()).length).toEqual(7);
    }); //end of 'each of stars receives 7 props'

    it("each of stars conditionally receives prop 'className'(className='star selected' or className='star') depending on the state.rating", () => {
      const { wrapper, star } = setup();
      wrapper.setState({ rating: 7 });
      expect(star().filter('[className="star selected"]')).toHaveLength(7);
    }); // end of 'each of stars conditionally receives prop 'className'(className='star selected' or className='star') depending on the state.rating'

  }); // end of "All stars"


  //--------------------------------------------
  // Rendering Description
  //--------------------------------------------

  describe("rating description jest zależne od if ratingDesc prop is passed", () => {

    it("jelsi otrzyma ratingDesc prop = false to nie wyświetli opis w divie", () => {
      const { description } = setup({ ratingDesc: false });
      expect(description().exists()).toBe(false);
    });

    it(".a jesli wyswietli ten opis to  bedzie on na podstawie rating ze stanu", () => {
      let { wrapper, description } = setup({ rating: 3 });
      console.log(wrapper.debug());
      expect(description().exists()).toBe(true);
      expect(wrapper.state().rating).toBe(6);
      expect(description().text()).toBe(
        ratingDescription[wrapper.state().rating]
      );
    });
  });


  //-------------------------------------------------------------
  // What does the component do when user is interacting with it
  //-------------------------------------------------------------



  //1.jesli otrzyma allowClear (true/false) to uzyje go w metodzie glosowania
  // i albo pozwoli na wyczyszczenie stanu po ponownym kliknieciu albo nie

  // What the component does when the USER INTERACTS with it

  // Mouse events
  // 1.proposition of voting after mouseover event
  // kiedy user najedzie tymczasowo zznacza się gwiazda
  // oraz czy podpowiedz jest dobra z listy podpowiedzi?????
  // 2.return to the state before 'hover'
  // kiedy user odjedzie i nie nacisnie bedzie powrt do stanu sprzed hovera
  // Click event
  // 1. voting after clicking
  // kiedy user kliknie zaznaczy sie odpowiednia gwiazda"
  // =jelsi jest allow:
  //   - albo zesetuje jeśli nacisnał to samo
  //   -albo zaznaczy nowy wybor jesi nacisnal cos innego
  // ==jelsi nie ma allow
  // - albo pozostanie bez zmina jeśli nacisnał to samo
  //   - albo zaznaczy nowy wybor jesli wczesniej byl inny
}); //end of 'RatingStars component'
