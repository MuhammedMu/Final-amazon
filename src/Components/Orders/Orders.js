import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { useDataGlobaly } from "../StateProvider/StateProvider";

function Orders() {
  const [orders, setOrders] = useState([]);
  const { user } = useDataGlobaly();

  console.log(user);

  useEffect(() => {
    if (user) {
      const uid = user.uid;
      const ref = collection(db, uid);
      getDocs(ref)
        .then((data) => {
          // console.log(data.docs);
          let items = [];
          data.docs.map((doc) => {
          return  items.push({ ...doc.data(), id: doc.id });
          });
          setOrders(items);
  