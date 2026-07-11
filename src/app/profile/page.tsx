"use client";

import { Header } from "@/components/Header";
import ProfileArea from "./components/ProfileArea";
import ProfileNav from "./components/ProfileNav";
import ProfileHistory from "./components/ProfileHistory";
import clsx from "clsx";
import { FLEX, FLEX_COL, GAP_5, H_FULL, P_3, W_FULL } from "@/constants/tailwind";

const ProfilePage = () => {


  return (
    <div className="flex min-h-dvh w-full flex-col bg-surface" >
      <Header />

      <main className={clsx(FLEX, W_FULL, H_FULL, FLEX_COL, GAP_5, P_3)}>
        <ProfileArea />
        <ProfileNav />
        <ProfileHistory />
      </main>
    </div>
  );
};

export default ProfilePage;
