export const SocialMediaIcon = ({ platform }) => {
  const iconFileName = platform + ".svg";
  const iconSrc = `../resources/footer/${iconFileName}`;

  return (
    <li>
      <a href="#">
        <img src={iconSrc} alt={platform} />
      </a>
    </li>
  );
};
