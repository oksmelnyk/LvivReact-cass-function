import React from "react";
import Year from "./Year";

export default class ClassComponent extends React.Component {
  state = {
    rMList: [],
    character: {},
  };

  onClick() {
    fetch("https://rickandmortyapi.com/api/character/10")
      .then((data) => data.json())
      .then((res) => {
        this.setState({
          character: res,
        });
      });
  }

  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/character")
      .then((data) => data.json())
      .then((res) => {
        this.setState({
          rMList: res.results,
        });
      });
  }

  render() {
    return (
      <div>
        <h1>Історія Львова</h1>
        <img src="/XIX.jpg" />
        <p>
          <b>Львів</b> -
          <small>
            найбільше місто Західноі Украіни, що протягом багатовіковоі історії
            було, і є нині, культурним та національним центром регіону.
          </small>
          <br />
          <br />
          <strong>
            <i>В найдавніші часи</i>
          </strong>
          - столиця Галицько-Волинської держави, згодом - адміністративний центр
          Руського воєводства, автономного Королівства Галіції і Лодомерії.{" "}
          <br />
          <br />У <Year initialValue={1918} />
          році - столиця ЗУНР. Після захоплення міста Польщею, Львів став
          центром однойменного воєводства. <br />
          <br />
          У Другій світовій війні був окупований спочатку радянською, а потім
          німецькою арміями.
          <br />У повоєнний період відійшов до Рядянського Союзу.
          <ins>
            З <Year initialValue={1991} /> року - адміністративний центр
            Львівської області Незалежної України.
          </ins>
          <br />
        </p>
        <div>
          <h3>Зміст</h3>
          <ol style={{ listStyleType: "none" }}>
            <li>
              <b>Заснування</b>
            </li>
            <li>
              <b>1253-1349</b>: Руське Королівство (Галицько-Волинська держава):
              протистояння з Золотою Ордою
            </li>
            <li>
              <b>1349-1387</b>: Руське Королівство: протистояння з Польщею та
              Угорщиною
            </li>
            <li>
              <b>1387-1772</b>: під владою Польського королівства та Речі
              Посполитої
            </li>
            <li>
              <b>1772-1914</b>: у складі Австрійської (згодом Австро-Угорської)
              імперії
            </li>
            <li>
              <b>1914-1919</b>: у період Першої світової війни та Української
              революції
            </li>
            <li>
              <b>1919-1939</b>: у складі Другої Речі Посполитої
            </li>
            <li>
              <b>1939-1944</b>: у період Другої світової війни
            </li>
            <li>
              У
              <b>
                <Year initialValue={1990} />
              </b>
              відбувається розвал великих підприємств і триває затяжна
              економічна криза
            </li>
            <li>
              Зранку 18 березня
              <b>
                <Year initialValue={2022} />
              </b>
              року Львів вперше з початку російського вторгнення зазнав
              ракетного удару.
            </li>
          </ol>
        </div>
        <hr />
        <button onClick={() => this.onClick()}>Click</button>
        <br />
        <img src={this.state.character.image} />
        <hr />
        {this.state.rMList.map((el) => (
          <div key={el.id}>
            <p>{el.name}</p>
            <img src={el.image} />
          </div>
        ))}
      </div>
    );
  }
}
