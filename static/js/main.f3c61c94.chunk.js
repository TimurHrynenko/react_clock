(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),c=n(6),i=n.n(c),r=n(1),l=n(2),s=n(4),m=n(3),u=(n(12),function(t){Object(s.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={time:(new Date).toLocaleTimeString("en-GB")},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.state.timer=setInterval((function(){t.setState({time:(new Date).toLocaleTimeString("en-GB")}),console.log(t.state.time)}),1e3)}},{key:"componentDidUpdate",value:function(t){t.name!==this.props.name&&console.log("The Clock was renamed from ".concat(t.name," to ").concat(this.props.name))}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.timer)}},{key:"render",value:function(){var t=this.state.time;return o.a.createElement("span",null,t)}}]),n}(o.a.Component)),p=function(t){Object(s.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={isClockVisible:!0,name:(100*Math.random()).toFixed(0)},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this,e=this.state.name;return o.a.createElement("div",{className:"App"},o.a.createElement("h1",{className:"App__title"},"React clock"),o.a.createElement("div",{className:"App__content"},"Current time:"," ",this.state.isClockVisible?o.a.createElement(u,{name:e}):null,o.a.createElement("div",{className:"App__buttons"},o.a.createElement("button",{type:"button",className:"App__button",onClick:function(){t.setState({isClockVisible:!0})}},"Show")," ",o.a.createElement("button",{type:"button",className:"App__button",onClick:function(){t.setState({isClockVisible:!1})}},"Hide")," ",o.a.createElement("button",{type:"button",className:"App__button",onClick:function(){t.setState({name:(100*Math.random()).toFixed(0)})}},"Set random name"))))}}]),n}(o.a.Component);i.a.render(o.a.createElement(p,null),document.getElementById("root"))},7:function(t,e,n){t.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.f3c61c94.chunk.js.map