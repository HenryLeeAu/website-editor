import styled from 'styled-components';

const PanelWrapperStyle = styled.div`
  position: absolute;
  height: 100%;
  background: #fff;
  top: 0;
  right: 0;
  padding-top: 4.375rem;
  padding-bottom: 3.25rem;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(255, 255, 255);
  background-color: rgb(241, 244, 245);
  box-shadow: 0px 0px 0px 1px rgba(212, 219, 222, 0.58);
  width: 347px;
  z-index: 3;
  .title {
    border-style: solid !important;
    border-width: 0 0 1px 0 !important;
    border-color: #dde7ea !important;
    box-shadow: 0px 1px 0px 0px #feffff !important;
    margin: 0 -1rem 1rem !important;
    padding: 0 1rem 1rem !important;
  }
  .optionContent {
    overflow: hidden;
    &.show {
      max-height: 150px;
      transition-duration: 1s;
    }
    &.hidden {
      transition-duration: 0.5s;
      max-height: 0px;
    }
  }

  & > div {
    height: 100%;
    overflow-y: auto;
  }

  .featureAction {
    position: fixed;
    background-color: rgb(241, 244, 245);
    box-shadow: rgba(112, 138, 146, 0.32) 0.25rem -0.125rem 0.5rem 0.0625rem;
    bottom: 0;
    width: 100%;
    button {
      width: 9.6878rem;
    }
  }
  .adjustWrap {
    font-size: 0.875rem;
    padding: 0.5rem 0;
    width: 100%;
    .section {
      h3 {
        font-size: 1rem;
      }
    }
    .customInputTitle {
      padding: 0.5rem 0;
    }
    .adjustTitle {
      text-transform: capitalize;
      width: 25%;
    }
    .adjustImagWrap {
      padding: 1rem 27%;
    }
    .inputLink {
      .targetBlank {
        text-align: right;
        margin: 0.5rem 0;
      }
    }
    .widthFix {
      overflow-x: auto;
      display: -ms-grid;
      -ms-grid-columns: max-content;
    }
    .boxRow {
      width: -moz-max-content;
      width: -webkit-max-content;

      .imagePreview {
        overflow: hidden;
        width: 70px;
        height: 70px;
        display: inline-block;
        background-size: cover;
        background-position: 50% 50%;
        font-size: 15px;
        background-color: #f1f4f5;
        border: 2px solid #fff;
        margin: 6px;
        cursor: pointer;
        & > div {
          color: #666666;
          transform: translate(-50%, -50%);
          width: 100%;
          text-align: center;
          margin-left: 50%;
          margin-top: 50%;
        }
        &:hover,
        &.selected {
          box-shadow: 0px 0px 0px 2px rgb(95, 108, 119);
        }
      }
    }
    .adjustContent {
      width: 75%;
      height: 32px;

      .adjustBase {
        border-style: solid;
        border-width: 1px;
        border-color: rgb(215, 222, 225);
        border-radius: 3px;
        background-color: rgba(241, 244, 245, 0);
        box-shadow: 0px 1px 0px 0px rgba(255, 255, 255, 0.94);
        width: 100%;
        & > div {
          border-left: 1px solid #d7dee1;
          &:first-child {
            border-left: 0;
          }
        }
        select {
          cursor: pointer;
          height: 30px;

          background: none;
          color: #666666;
          width: 100%;
          border: 2px solid rgba(255, 255, 255, 0);
          &:focus {
            border: 2px solid #e4e8ea;
            background: #eceff1;
          }
        }
      }
      .colorButton {
        width: 33px;
        button {
          border: 0;
          width: 22px;
          height: 22px;
          background: #ccc;
          display: block;
          margin-left: 5px;
        }
      }
      .adjustBackgroundImage {
        .adjustBase {
          & > div {
            &:nth-child(2) {
              width: 100px;
            }
          }
        }
      }
    }
  }
`;

export default PanelWrapperStyle;
