import { BottomNav } from "@/components/BottomNav";
import { Header } from "@/components/Header";
import { BG_BASE, FLEX, FLEX_COL, FULL } from "@/constants/tailwind";
import clsx from "clsx";
import LogsContainer from "./components/LogsContainer";
import MySaveLogs from "./components/MySaveLogs";
import Logs from "./components/Logs";

export default async function LogsPage() {
  return (
    <div className={clsx(FULL, FLEX, BG_BASE, FLEX_COL)}>
      <Header />
      <LogsContainer>
        <MySaveLogs />
        <Logs />
      </LogsContainer>
      <BottomNav />
    </div>
  );
}
