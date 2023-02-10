import React from "react";
import "../assets/leftPane.css";
import GridViewIcon from "@mui/icons-material/GridView";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LanguageIcon from "@mui/icons-material/Language";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Avatar from "@mui/material/Avatar";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { deepPurple } from "@mui/material/colors";
import logo from '../assets/logo.jpg';


export const LeftPane = () => {
  return (
    <div className="leftPane">
      <div className="appName_div">
        <div className="commonIconName">
          <span className="iconsHover">
            <Avatar alt="img" src={logo} variant="rounded"></Avatar>
          </span>
          <p className="iconsHover">Artemis</p>
        </div>
      </div>
      <div className="appMain_div">
        <p className="leftTextHeader">MAIN</p>
        <Accordion className="accordation">
          <AccordionSummary
            className="accSummary"
            expandIcon={<ExpandMoreIcon />}
          >
            <AccountCircleIcon className="icon" />
            <Typography className="text">Dashboard</Typography>
          </AccordionSummary>
          <AccordionSummary
            className="accSummary"
            expandIcon={
              <Avatar
                sx={{ bgcolor: deepPurple[800], width: 30, height: 30 }}
                variant="circle"
              >
                4
              </Avatar>
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <LanguageIcon className="icon" />
            <Typography className="text">Discover</Typography>
          </AccordionSummary>
        </Accordion>
        <div className="leftMain_list">
          <div className="commonIconName">
            <span className="iconsHover">
              <AccountBoxOutlinedIcon />
            </span>
            <p className="iconsHover">Users</p>
          </div>
          <span className="iconsHover">
            <ExpandMoreOutlinedIcon />
          </span>
        </div>
        <div className="leftMain_list">
          <div className="commonIconName">
            <span className="iconsHover">
              <ImportContactsOutlinedIcon />
            </span>
            <p className="iconsHover">Documents</p>
          </div>
          <span className="iconsHover">
            <ExpandMoreOutlinedIcon />
          </span>
        </div>
        <div className="leftMain_list">
          <div className="commonIconName">
            <span className="iconsHover">
              <GridViewIcon />
            </span>
            <p className="iconsHover">Applications</p>
          </div>
          <span className="iconsHover">
            <ExpandMoreOutlinedIcon />
          </span>
        </div>
        <div className="leftMain_list">
          <div className="commonIconName">
            <span className="iconsHover">
              <InsertDriveFileOutlinedIcon />
            </span>
            <p className="iconsHover">Pages</p>
          </div>
          <span className="iconsHover">
            <ExpandMoreOutlinedIcon />
          </span>
        </div>
      </div>
      <div className="appSecondary_div">
        <p className="leftTextHeader">SECONDARY</p>
        <div className="commonIconName">
          <span className="iconsHover">
            <HelpOutlineIcon />
          </span>
          <p className="iconsHover">Support Center</p>
        </div>
        <div className="commonIconName">
          <span className="iconsHover">
            <InboxOutlinedIcon />
          </span>
          <p className="iconsHover">Inbox</p>
        </div>
        <div className="commonIconName">
          <span className="iconsHover">
            <FolderOutlinedIcon />
          </span>
          <p className="iconsHover">File Manager</p>
        </div>
        <div className="commonIconName">
          <span className="iconsHover">
            <FormatListBulletedOutlinedIcon />
          </span>
          <p className="iconsHover">Data List</p>
        </div>
      </div>
      <div className="appLogout_div">
        <div className="commonIconName">
          <span className="iconsHover">
            <SettingsOutlinedIcon />
          </span>
          <p className="iconsHover">Settings</p>
        </div>
        <div className="commonIconName">
          <span className="iconsHover">
            <ExitToAppOutlinedIcon />
          </span>
          <p className="iconsHover">Log Out</p>
        </div>
      </div>
    </div>
  );
};
