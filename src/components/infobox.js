import React from 'react'

export default (props) => {

  const toList = (info) => {

    const parseObj = (obj) => {

      let list = []
      for (const key in obj) {
        list.push( <div key={ key } id={ key } ><span>{ key }: </span><span>{ toList(obj[key]) } </span></div> )
      }
      return list
    }

    const parseArr = (arr) => {
      let list = []

      for (let i = 0; i < arr.length; i++) {
        list.push( toList(arr[i]) )
      }
      return list
    }

    if (typeof info === 'string') { return info } else if (Array.isArray(info)) { return parseArr(info) } else if (typeof info === 'object') { return parseObj(info) } else { return info }
  }


  return <div className="infobox"> { toList(props.viewing) } </div>
}
