import React from "react";
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux";

const ContactList = () => {
  const contactList = useSelector((state) => state.contactList);
  const keyword = useSelector((state) => state.keyword);
  let list = !keyword
    ? contactList
    : contactList.filter((i) => i.includes(keyword));
  return (
    <div>
      <SearchBox />
      {list.map((item) => (
        <ContactItem item={item} />
      ))}
    </div>
  );
};

export default ContactList;
