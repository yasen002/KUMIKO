import tapas from '../img/tapas.svg'
import appetizer from '../img/appetizer.svg'
import salad from '../img/salad.svg'
import noodles from '../img/noodles.svg'
import food_and_restaurant from '../img/food-and-restaurant.svg'
import eat from '../img/eat.svg'
import food_and_restaurant_1 from '../img/food-and-restaurant (1).svg'
import chef from '../img/chef.svg'
import sushi_com from '../img/sushi_com.svg'
import fried_rice from '../img/fried-rice.svg'
import sashimi from '../img/sashimi.svg'
import sushi_2 from '../img/sushi_2.svg'
import sushi_1 from '../img/sushi_1.svg'
import sushi3 from '../img/sushi3.svg'
import pot from '../img/pot.svg'
// import food_and_restaurant_2 from '../img/food-and-restaurant_2.svg'





import React, { Component } from 'react'
import GroupInfo from './GroupInfo'





export default class MenuA extends Component {

  render() {
    return (
      <div className="grid container">
        <GroupInfo 
        key="APPETIZERS" 
        groupItem="APPETIZERS" 
        img={appetizer} 
        groupClick={() => this.props.groupClick("APPETIZERS")} />

        <GroupInfo 
        key="JAPANESE_TAPAS" 
        groupItem="JAPANESE_TAPAS" 
        img={tapas} 
        groupClick={() => this.props.groupClick("JAPANESE_TAPAS")} />

        <GroupInfo 
        key="SALADS" 
        groupItem="SALADS" 
        img={salad} 
        groupClick={() => this.props.groupClick("SALADS")} />

        <GroupInfo 
        key="SOUP_NOODLES" 
        groupItem="SOUP_NOODLES" 
        img={noodles} 
        groupClick={() => this.props.groupClick("SOUP_NOODLES")} />

        <GroupInfo 
        key="ENTREES" 
        groupItem="ENTREES" 
        img={eat} 
        groupClick={() => this.props.groupClick("ENTREES")} /> 

        <GroupInfo 
        key="BOWLS" 
        groupItem="BOWLS" 
        img={food_and_restaurant_1} 
        groupClick={() => this.props.groupClick("BOWLS")} />

        <GroupInfo 
        key="CHEF_SPECIAL_DISHES" 
        groupItem="CHEF_SPECIAL_DISHES" 
        img={chef} 
        groupClick={() => this.props.groupClick("CHEF_SPECIAL_DISHES")} />

        <GroupInfo 
        key="SUSHI_SASHIMI_COMBINATION" 
        groupItem="SUSHI_SASHIMI_COMBINATION" 
        img={sushi_com} 
        groupClick={() => this.props.groupClick("SUSHI_SASHIMI_COMBINATION")} />

        <GroupInfo 
        key="FRIED_RICE" 
        groupItem="FRIED_RICE" 
        img={fried_rice} 
        groupClick={() => this.props.groupClick("FRIED_RICE")} />

        <GroupInfo 
        key="SUSHI" 
        groupItem="SUSHI" 
        img={sushi3} 
        groupClick={() => this.props.groupClick("SUSHI")} />

        <GroupInfo 
        key="SASHIMI" 
        groupItem="SASHIMI" 
        img={sashimi} 
        groupClick={() => this.props.groupClick("SASHIMI")} />

        <GroupInfo 
        key="ROLLS" 
        groupItem="ROLLS" 
        img={sushi_2} 
        groupClick={() => this.props.groupClick("ROLLS")} />

        <GroupInfo 
        key="SPECIAL_ROLLS" 
        groupItem="SPECIAL_ROLLS" 
        img={sushi_1} 
        groupClick={() => this.props.groupClick("SPECIAL_ROLLS")} />

        <GroupInfo 
        key="SPECIAL_COOKED_ROLLS" 
        groupItem="SPECIAL_COOKED_ROLLS" 
        img={pot} 
        groupClick={() => this.props.groupClick("SPECIAL_COOKED_ROLLS")}/>
{/* 
        

        <GroupInfo img={sashimi}/>
        <GroupInfo img={sushi_1}/>
        <GroupInfo img={sushi_2}/>
        <GroupInfo img={pot}/>
        <GroupInfo img={food_and_restaurant_2}/> */}

        
        {/* <div id="item2" className="item">
          <h4>JAPANESE TAPAS</h4>
          <p className="desc">description gos here description gos heredescription gos here</p>
          <img src={tapas} alt="tapas" />
        </div>

        <div id="item3" className="item">
          <h4>SALADS</h4>
          <p className="desc">description gos here description gos heredescription gos here</p>
          <img src={salad} alt="" />
        </div>
        <div id="item4" className="item">
          <h4>SOUP &amp; NOODLES</h4>
          <p className="desc">description gos here description gos heredescription gos here</p>
          <img src={noodles} alt="" />
        </div>
        <div id="item5" className="item">
          <h4>DONBURI</h4>
          <p className="desc">description gos here description gos heredescription gos here</p>
          <img src={food_and_restaurant} alt="" />
        </div>
        <div id="item6" className="item">
          <h4>ENTREES</h4>
          <p className="desc">description gos here description gos heredescription gos here</p>
          <img src={eat} alt="" />
        </div>
        <div id="item7" className="item">
          <h4>BOWLS</h4>
          <p className="desc">description gos here description gos heredescription gos here</p>
          <img src={food_and_restaurant_1} alt="" />
        </div>
        <div id="item8" className="item">
          <h4>CHEF'S SPECIAL DISHES</h4>
          <p className="desc">description gos here description gos heredescription gos here</p>
          <img src={chef} alt="" />
        </div>
        <div id="item9" className="item">
          <h4>SUSHI &amp; SASHIMI COMBINATIONS</h4>
          <p className="desc">description gos here description gos heredescription gos here</p>
          <img src={sushi_com} alt="" />
        </div>
        <div id="item10" className="item">
          <h4>FRIED RICE</h4>
          <p className="desc">description gos here description gos heredescription gos here</p>
          <img src={fried_rice} alt="" />
        </div><div id="item11" className="item">
          <h4>SUSHI AND SASHIMI</h4>
          <p className="desc">description gos here description gos heredescription gos here</p>
          <img src={sashimi} alt="" />
        </div><div id="item12" className="item">
          <h4>ROLLS</h4>
          <p className="desc">description gos here description gos heredescription gos here</p>
          <img src={sushi_1} alt="" />
        </div>
        <div id="item13" className="item">
          <h4>SPECIAL ROLLS</h4>
          <p className="desc">description gos here description gos heredescription gos here</p>
          <img src={sushi_2} alt="" />
        </div>
        <div id="item14" className="item">
          <h4>SPECIAL COOKED ROLLS</h4>
          <p className="desc">description gos here description gos heredescription gos here</p>
          <img src={pot} alt="" />
        </div>
        <div id="item15" className="item">
          <h4>NON-ALCOHOLIC BEVERAGES</h4>
          <p className="desc">description gos here description gos heredescription gos here</p>
          <img src={food_and_restaurant_2} alt="" />
        </div> */}
    </div> 
    )
  }
}
