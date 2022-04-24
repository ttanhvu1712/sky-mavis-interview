import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "slices/hooks";
import { actions, selector } from "slices/userInfo";
import type { NextPage } from "next";


const Testing: NextPage = () => {
  const dispatch = useAppDispatch();
  const { profile, balances } = useAppSelector(selector);
  
  console.log(profile, balances)

  return <div>Test Page</div>;
};

export default Testing;
