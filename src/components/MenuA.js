import tapas from "../img/tapas.svg";
import appetizer from "../img/appetizer.svg";
import salad from "../img/salad.svg";
import noodles from "../img/noodles.svg";
import food_and_restaurant from "../img/food-and-restaurant.svg";
import eat from "../img/eat.svg";
import food_and_restaurant_1 from "../img/food-and-restaurant (1).svg";
import chef from "../img/chef.svg";
import sushi_com from "../img/sushi_com.svg";
import fried_rice from "../img/fried-rice.svg";
import sashimi from "../img/sashimi.svg";
import sushi_1 from "../img/sushi_1.svg";
import sushi_2 from "../img/sushi_2.svg";
import pot from "../img/pot.svg";
import food_and_restaurant_2 from "../img/food-and-restaurant_2.svg";

import React, { Component } from "react";

export default class MenuA extends Component {
  render() {
    return (
      <div className="grid container">
        <div id="item1" className="item">
          <h4>APPETIZERS</h4>
          <p className="desc">Getting ready for the main dish</p>
          <img src={appetizer} alt="" />
        </div>
        <div id="item2" className="item">
          <h4>JAPANESE TAPAS</h4>
          <p className="desc">
            description gos here description gos heredescription gos here
          </p>
          <img src={tapas} alt="tapas" />
        </div>

        <div id="item3" className="item">
          <h4>SALADS</h4>
          <p className="desc">
            description gos here description gos heredescription gos here
          </p>
          <img src={salad} alt="" />
        </div>
        <div id="item4" className="item">
          <h4>SOUP &amp; NOODLES</h4>
          <p className="desc">
            description gos here description gos heredescription gos here
          </p>
          <img src={noodles} alt="" />
        </div>
        <div id="item5" className="item">
          <h4>DONBURI</h4>
          <p className="desc">
            description gos here description gos heredescription gos here
          </p>
          <img src={food_and_restaurant} alt="" />
        </div>
        <div id="item6" className="item">
          <h4>ENTREES</h4>
          <p className="desc">
            description gos here description gos heredescription gos here
          </p>
          <img src={eat} alt="" />
        </div>
        <div id="item7" className="item">
          <h4>BOWLS</h4>
          <p className="desc">
            description gos here description gos heredescription gos here
          </p>
          <img src={food_and_restaurant_1} alt="" />
        </div>
        <div id="item8" className="item">
          <h4>CHEF'S SPECIAL DISHES</h4>
          <p className="desc">
            description gos here description gos heredescription gos here
          </p>
          <img src={chef} alt="" />
        </div>
        <div id="item9" className="item">
          <h4>SUSHI &amp; SASHIMI COMBINATIONS</h4>
          <p className="desc">
            description gos here description gos heredescription gos here
          </p>
          <img src={sushi_com} alt="" />
        </div>
        <div id="item10" className="item">
          <h4>FRIED RICE</h4>
          <p className="desc">
            description gos here description gos heredescription gos here
          </p>
          <img src={fried_rice} alt="" />
        </div>
        <div id="item11" className="item">
          <h4>SUSHI AND SASHIMI</h4>
          <p className="desc">
            description gos here description gos heredescription gos here
          </p>
          <img src={sashimi} alt="" />
        </div>
        <div id="item12" className="item">
          <h4>ROLLS</h4>
          <p className="desc">
            description gos here description gos heredescription gos here
          </p>
          <img src={sushi_1} alt="" />
        </div>
        <div id="item13" className="item">
          <h4>SPECIAL ROLLS</h4>
          <p className="desc">
            description gos here description gos heredescription gos here
          </p>
          <img src={sushi_2} alt="" />
        </div>
        <div id="item14" className="item">
          <h4>SPECIAL COOKED ROLLS</h4>
          <p className="desc">
            description gos here description gos heredescription gos here
          </p>
          <img src={pot} alt="" />
        </div>
        <div id="item15" className="item">
          <h4>NON-ALCOHOLIC BEVERAGES</h4>
          <p className="desc">
            description gos here description gos heredescription gos here
          </p>
          <img src={food_and_restaurant_2} alt="" />
        </div>
      </div>
    );
  }
}
