


const getWindowSize = () => {
    return {
        width: window.innerWidth,
        height: window.innerHeight,
    };
}


const gapValue = () => {
    let value;

    const widthSize = getWindowSize().width;
    if (widthSize < 1400 && widthSize >= 1302) {
      value = {
        gap: 80,
        NumberOfItems: 3
      }
  } else if (widthSize <= 1301 && widthSize > 992) {
    value = {
        gap: 40,
        NumberOfItems: 3
      }
  } else if (widthSize < 992 && widthSize > 770) {
    value = {
        gap: 50,
        NumberOfItems: 2
      }
  } else if (widthSize < 770) {
    value = {
        gap: 20,
        NumberOfItems: 1
      }
  } else {
    value = {
        gap: 160,
        NumberOfItems: 3
      }
  }
  return value
}

const resizeConditions = (setNumberOfItems, setGap) => {
    const widthSize = getWindowSize().width;
    if (widthSize < 1400 && widthSize >= 1302) {
      setNumberOfItems(3)
      setGap(80)
    } else if (widthSize <= 1301 && widthSize > 992) {
      setNumberOfItems(3)
      setGap(40)
    } else if (widthSize < 992 && widthSize > 770) {
      setNumberOfItems(2)
      setGap(50)
    } else if (widthSize < 770) {
      setNumberOfItems(1)
      setGap(20)
    } else {
      setNumberOfItems(3)
      setGap(160)
    }
  }

export {resizeConditions, gapValue};