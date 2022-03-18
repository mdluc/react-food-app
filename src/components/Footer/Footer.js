import "./styles.scss";

const Footer = () => {
  const footerData = [
    {
      name: "FoodApplication",
      info: [
        "FoodApp is a place where you can please your sould and tummy with delicious food recepies of all cuisine. And our service is absolutely free. So start exploring now.",
        "© 2022 | All Rights Reserved",
      ],
    },
    {
      name: "Contact us",
      info: [
        "foodapp@example.com",
        "(870) 572-2975",
        "1606 N Jackson St, New Jersey",
      ],
    },
    {
      name: "Socials",
      info: ["Facebook", "Twitter", "Instagram"],
    },
  ];
  return (
    <div className="footer container">
      {footerData.map((item, index) => (
        <div className="footer-section"  key={index}>
          <div>
            <p className="title">{item.name}</p>
            {item.info.map((info, idx) => (
              <p key={idx}>{info}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Footer;
