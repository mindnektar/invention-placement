import React, { Component } from 'react'

import './Icons.css'

import { Icon } from 'react-icons-kit'
import { heartO } from 'react-icons-kit/fa/heartO'

export default class LikeIcon extends Component {
  render() {
    if (this.props.show) {
      return (
        <Icon
          size={'120%'}
          onClick={e => this.props.onLike(this.props.id)}
          float={'right'}
          className="likeicon"
          icon={heartO}
          style={{ cursor: 'pointer' }}
          isLiked={this.props.isLiked}
        />
      )
    } else {
      return null
    }
  }
}
