// https://docs.google.com/spreadsheets/d/1Ifv_KbYZAjzsg_8KG7FfwgDr1IRxmwBDZJwJFGmH7pw/edit?usp=sharing
// const jsonUrl = `https://spreadsheets.google.com/feeds/list/1Ifv_KbYZAjzsg_8KG7FfwgDr1IRxmwBDZJwJFGmH7pw/od6/public/values?alt=json`
// const jsonUrl = `http://gsx2json.com/api?id=1Ifv_KbYZAjzsg_8KG7FfwgDr1IRxmwBDZJwJFGmH7pw`
const jsonUrl = `https://sheet.best/api/sheets/0d083243-7fd3-476c-a786-4bde2c5ad395`


export async function getProvidersData() {
  let response = await fetch(jsonUrl)
  let data = await response.json();
 let  columns = Object.keys(data[0]).map((key) => key);
  let res ={
    columns,
    rows:data
  }
  return res
}

export const FAKE = () => {
  return {
    columns: {
      strategy: [
        "Legacy",
        "Ruby",
        "Apollo",
        "Radiant",
        "Emerlad",
        "Pearl",
        "Crystal",
        "Dynamo",
        "Equi",
      ],
      netpl: [
        571.72,
        879.63,
        407.81,
        "219.28%",
        114.89,
        165.16,
        214.5,
        "-4.18%",
        "-8.51%",
      ],
      netprofit: [
        "58,408.17",
        "7,247.36",
        "10,195.83",
        "21,928.11",
        "3,237",
        "42,817",
        "209,567.54",
        "-4,026.10",
        -255.16,
      ],
      trades: [204777, 3020, 1604, 2997, 604, 243330, 33329, 795, 2113],
      win: [
        "47.72%",
        81.82,
        83.6,
        "70.20%",
        91.06,
        49.83,
        68.04,
        "62.77%",
        63.75,
      ],
      profitfactor: [1.2, 1.88, 3.37, 1.29, 2.09, 1.22, 1.48, 0.97, 1.43],
      weeks: [453, 70, 249, 116, 52, 150, 60, 40, 34],
      followers: [898, 889, 724, 542, 492, 280, 228, 161, 65],
    },
    rows: [
      {
        strategy: "Legacy",
        netpl: 571.72,
        netprofit: "58,408.17",
        trades: 204777,
        win: "47.72%",
        profitfactor: 1.2,
        weeks: 453,
        followers: 898,
      },
      {
        strategy: "Ruby",
        netpl: 879.63,
        netprofit: "7,247.36",
        trades: 3020,
        win: 81.82,
        profitfactor: 1.88,
        weeks: 70,
        followers: 889,
      },
      {
        strategy: "Apollo",
        netpl: 407.81,
        netprofit: "10,195.83",
        trades: 1604,
        win: 83.6,
        profitfactor: 3.37,
        weeks: 249,
        followers: 724,
      },
      {
        strategy: "Radiant",
        netpl: "219.28%",
        netprofit: "21,928.11",
        trades: 2997,
        win: "70.20%",
        profitfactor: 1.29,
        weeks: 116,
        followers: 542,
      },
      {
        strategy: "Emerlad",
        netpl: 114.89,
        netprofit: "3,237",
        trades: 604,
        win: 91.06,
        profitfactor: 2.09,
        weeks: 52,
        followers: 492,
      },
      {
        strategy: "Pearl",
        netpl: 165.16,
        netprofit: "42,817",
        trades: 243330,
        win: 49.83,
        profitfactor: 1.22,
        weeks: 150,
        followers: 2280,
      },
      {
        strategy: "Crystal",
        netpl: 214.5,
        netprofit: "209,567.54",
        trades: 33329,
        win: 68.04,
        profitfactor: 1.48,
        weeks: 60,
        followers: 228,
      },
      {
        strategy: "Dynamo",
        netpl: "-4.18%",
        netprofit: "-4,026.10",
        trades: 795,
        win: "62.77%",
        profitfactor: 0.97,
        weeks: 40,
        followers: 161,
      },
      {
        strategy: "Equi",
        netpl: "-8.51%",
        netprofit: -255.16,
        trades: 2113,
        win: 63.75,
        profitfactor: 1.43,
        weeks: 34,
        followers: 65,
      },
    ],
  }
}
