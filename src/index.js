import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Cards';
import Sdata from './Sdata';

ReactDOM.render(
  <>
    <h1 className="heading_style">Netflix clone App created by Chandan patel</h1>

    <Card imgsrc="dark.jpg"
      title="Netflix Original series"
      sname="DARK"
      link="https://www.netflix.com/in/title/80100172" />

    <Card imgsrc="bojack.jpg"
      title="Netflix Original series"
      sname="Bojack Horseman"
      link="https://www.netflix.com/in/title/70300800" />

    <Card imgsrc="stranger.jpg"
      title="Netflix Original series"
      sname="Stranger things"
      link="https://www.netflix.com/in/title/80057281" />

    <Card imgsrc="money.jpg"
      title="Netflix Original series"
      sname="Money heist"
      link="https://www.netflix.com/in/title/80192098" />

    <Card imgsrc="13reason.jpg"
      title="Netflix Original series"
      sname="13 Reason Why"
      link="https://www.netflix.com/in/title/80100172" />

<Card imgsrc="bojack.jpg"
      title="Netflix Original series"
      sname="Bojack Horseman"
      link="https://www.netflix.com/in/title/70300800" />

<Card imgsrc="ozark.jpg"
      title="Netflix Original series"
      sname="OZARK"
      link="https://www.netflix.com/in/title/80117552" />

<Card imgsrc="the cown.jpg"
      title="Netflix Original series"
      sname="The Crown"
      link="https://www.netflix.com/in/title/80025678" />

<Card imgsrc="the witcher.jpg"
      title="Netflix Original series"
      sname="The Witcher"
      link="https://www.netflix.com/in/title/80189685" />

<Card imgsrc="walking dead.jpg"
      title="Netflix Original series"
      sname="The Walking Dead"
      link="https://www.netflix.com/in/title/70177057" />

<Card imgsrc="bb.jpg"
      title="Netflix Original series"
      sname="Breaking Bad"
      link="https://www.netflix.com/in/title/70143836" />

<Card imgsrc="narcos.jpg"
      title="Netflix Original series"
      sname="Narcos"
      link="https://www.netflix.com/in/title/80025172" />
      </>,
     document.getElementById("root")
);

