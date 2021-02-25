(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{414:function(e,a,t){"use strict";t.r(a);var s=t(25),i=function(e){e.options.__data__block__={mermaid_64a57066:'graph TD\n  pre[Pre-cursor views e.g. Recline] --bespoke conversions--\x3e dpv[Data Package Views]\n  dpv --"normalize (correct any variations and ensure key fields are present)"--\x3e dpvn["Data Package Views<br />(Normalized)"]\n  dpvn --"compile in resource & data ([future] do transforms)"--\x3e dpvnd["Self-Contained View<br />(All data and schema inline)"]\n  dpvnd --compile to native spec--\x3e plotly[Plotly Spec]\n  dpvnd --compile to native spec--\x3e vega[Vega Spec]\n  plotly --render--\x3e html[svg/png/etc]\n  vega --render--\x3e html\n',mermaid_64a57028:'graph LR\n  inplotly["Plotly DP Spec"] --\x3e plotly[Plotly JSON]\n  simple[Simple Spec] --\x3e plotly\n  simple .-> vega[Vega JSON]\n  invega[Vega DP Spec] --\x3e vega\n  vegalite[Vega Lite DP Spec] --\x3e vega\n  recline[Recline] .-> simple\n  plotly --plotly lib--\x3e svg[SVG / PNG]\n  vega --vega lib--\x3e svg\n\n  classDef implemented fill:lightblue,stroke:#333,stroke-width:4px;\n  class recline,simple,plotly,svg implemented;\n',mermaid_64a56f64:"graph LR\n\n  geo[Geo Resource] --\x3e map\n  map[Map Spec] --\x3e leaflet[Leaflet]\n\n  classDef implemented fill:lightblue,stroke:#333,stroke-width:4px;\n  class geo,map,leaflet implemented;\n",mermaid_64a56f32:"graph LR\n  resource[Tabular Resource] --\x3e table\n  table[Table Spec] --\x3e handsontable[HandsOnTable]\n  table --\x3e html[Simple HTML Table]\n\n  classDef implemented fill:lightblue,stroke:#333,stroke-width:4px;\n  class resource,table,handsontable implemented;\n"}},r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("# Views - Design")]),e._v(" "),t("h2",{attrs:{id:"concepts-and-background"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#concepts-and-background"}},[e._v("#")]),e._v(" Concepts and Background")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("This is from "),t("a",{attrs:{href:"https://specs.frictionlessdata.io/views/#concepts-and-background",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://specs.frictionlessdata.io/views/#concepts-and-background"),t("OutboundLink")],1)])]),e._v(" "),t("p",[e._v("To generate visualizations you usually want the following 3 types of information:")]),e._v(" "),t("ul",[t("li",[e._v("metadata: e.g. title of graph, credits etc")]),e._v(" "),t("li",[e._v("graph: description / specification of the graph itself")]),e._v(" "),t("li",[e._v("data: specification of data sources for the graph including location and key metadata like types")])]),e._v(" "),t("p",[e._v("The data spec itself often consists of three distinct parts:")]),e._v(" "),t("ul",[t("li",[e._v("“raw / graph data”: a spec / description of data exactly in the form needed by the visualization system. This is often a very well defined spec e.g. an array of series …")]),e._v(" "),t("li",[e._v("locate/describe: a spec of where to get data from e.g. "),t("code",[e._v("url")]),e._v(" or "),t("code",[e._v("data")]),e._v(" attribute plus some information on that data such as format and types.")]),e._v(" "),t("li",[e._v("transform: a spec of how transform external data prior to use e.g. pivoting or filtering it")])]),e._v(" "),t("p",[e._v("From this description it should be clear that the latter two data specs – locate/describe and transform – are actually generic and independent of the specific graphing library. The only thing the graphing library really needs is a clear description of the “raw” format which it directly consumes. Thus, we can consider a natural grouping of specs as:")]),e._v(" "),t("ul",[t("li",[e._v("general-metadata - e.g. title of graph, credits etc [provided by e.g. Data Package / define yourself!]")]),e._v(" "),t("li",[e._v("data: sourcing and transform [provided by e.g. Data Resource]\n"),t("ul",[t("li",[e._v("sourcing: how to source data from external sources")]),e._v(" "),t("li",[e._v("transform: how to transform data e.g. pivot it, select one field, scale a field etc")])])]),e._v(" "),t("li",[e._v("graph description / specification [provided by e.g. Vega]\n"),t("ul",[t("li",[e._v("graph data (raw): data as directly consumed by graph spec (usually JSON based if we are talking about JS web-based visualization)")])])])]),e._v(" "),t("p",[e._v("However, in many visualization tools – including specs like Vega – these items are combined together. This is understandable as these tools seek to offer users a “complete solution”. However, "),t("strong",[e._v("decoupling these parts and having clearly defined interfaces would offer significant benefits")]),e._v(":")]),e._v(" "),t("ul",[t("li",[e._v("Extensability: it would be easier to extend and adapt the system. For example, adding new data import options could be done without changing the graph system.")]),e._v(" "),t("li",[e._v("Composability: we can combine different parts together in different ways. For example, data import and transformation could be used for generating data for tabular display as well as graphing.")]),e._v(" "),t("li",[e._v("Reusability: we want to reuse existing tools and specifications wherever possible. If we keep the specs relatively separate we can reuse the best spec for each job.")]),e._v(" "),t("li",[e._v("Reliability: when the system is decoupled it is easier to test and check.")])]),e._v(" "),t("p",[e._v("In summary, a smaller pieces, loosely joined makes it easier to adapt and evolve the specs and the associated tooling.")]),e._v(" "),t("h2",{attrs:{id:"the-tool-chain"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-tool-chain"}},[e._v("#")]),e._v(" The Tool Chain")]),e._v(" "),t("p",[t("em",[t("strong",[e._v("Figure 1: From Data Package View Spec to Rendered output")])])]),e._v(" "),t("Mermaid",{attrs:{id:"mermaid_64a57066",graph:e.$dataBlock.mermaid_64a57066}}),t("p",[e._v(":::info"),t("br"),e._v(" "),t("strong",[e._v("IMPORTANT")]),e._v(": an important “convention” we adopt for the “compiling-in” of data is that resource data should be inlined into an "),t("code",[e._v("_values")]),e._v(" attribute. If the data is tabular this attribute should be an array of "),t("em",[e._v("arrays")]),e._v(" (not objects)."),t("br"),e._v("\n:::")]),e._v(" "),t("h3",{attrs:{id:"graphs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#graphs"}},[e._v("#")]),e._v(" Graphs")]),e._v(" "),t("p",[t("em",[t("strong",[e._v("Figure 2: Conversion paths")])])]),e._v(" "),t("Mermaid",{attrs:{id:"mermaid_64a57028",graph:e.$dataBlock.mermaid_64a57028}}),t("p",[e._v("Notes:")]),e._v(" "),t("ul",[t("li",[e._v("Implemented paths are shown in lightblue.")]),e._v(" "),t("li",[e._v("Left-most column (Recline): pre-specs that we can convert to our standard specs")]),e._v(" "),t("li",[e._v("Second-from-left column: DP View spec types.")]),e._v(" "),t("li",[e._v("Second-from-right column: the graphing libraries we can use (which all output to SVG)")])]),e._v(" "),t("h3",{attrs:{id:"geo-support"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#geo-support"}},[e._v("#")]),e._v(" Geo support")]),e._v(" "),t("p",[e._v(":::info"),t("br"),e._v(" "),t("strong",[e._v("Note")]),e._v(": support for customizing map is limited to JS atm - there is no real map “spec” in JSON yet beyond the trivial version.")]),e._v(" "),t("p",[t("strong",[e._v("Note")]),e._v(": vega has some geo support but geo here means full geojson style mapping."),t("br"),e._v("\n:::")]),e._v(" "),t("Mermaid",{attrs:{id:"mermaid_64a56f64",graph:e.$dataBlock.mermaid_64a56f64}}),t("h3",{attrs:{id:"table-support"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#table-support"}},[e._v("#")]),e._v(" Table support")]),e._v(" "),t("Mermaid",{attrs:{id:"mermaid_64a56f32",graph:e.$dataBlock.mermaid_64a56f32}}),t("h3",{attrs:{id:"summary"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),t("p",[t("em",[t("strong",[e._v("Figure 3: From Data Package View to Rendered output flow (richer version of diagram 1)")])])]),e._v(" "),t("img",{attrs:{src:"https://docs.google.com/drawings/d/1M_6Vcal4PPSHpuKpzJQGvRUbPb5yeaAdRHomIIbfnlY/pub?w=790&h=1402"}})],1)}),[],!1,null,null,null);"function"==typeof i&&i(r);a.default=r.exports}}]);