import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';
import { Users } from '../../model';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  data:Users[] =[
    {
        name: "nagateja pillarisetti",
        email:"vijay@gmail.com",
        profile:'././assets/profilePicture.png',
        designation:"designer"
    },
    {
        name: "nagateja pillarisetti",
        email:"vijay@gmail.com",
        profile:'././assets/profilePicture.png',
        designation:"product engineer"
    },
    {
        name: "nagateja pillarisetti",
        email:"vijay@gmail.com",
        profile:"././assets/profilePicture.png",
        designation:"frontend developer"
    },
    {
        name: "nagateja pillarisetti ",
        email:"vijay@gmail.com",
        profile:"././assets/profilePicture.png",
        designation:"backend developer"
    },
    {
        name: "nagateja pillarisetti",
        email:"vijay@gmail.com",
        profile:"././assets/profilePicture.png",
        designation:"app developer"
    },
    {
        name: "nagateja pillarisetti",
        email:"vijay@gmail.com",
        profile:"././assets/profilePicture.png",
        designation:"designer"
    },
    {
        name: "nagateja pillarisetti",
        email:"vijay@gmail.com",
        profile:"././assets/profilePicture.png",
        designation:"head technology"
    }
    
  ];
  user1:Users={
    name: "nagateja pillarisetti",
    email:"vijay@gmail.com",
    profile:"././assets/profilePicture.png",
    designation:"frontend dev"
  };
  user2:Users={
    name: "nagateja pillarisetti",
    email:"vijay@gmail.com",
    profile:"",
    designation:"designer"
  };

  user3:Users={
    name: "",
    email:"vijay@gmail.com",
    profile:"",
    designation:"designer"
  };


  render() {
    return <div>
      <div class="d-flex">
              <professional-avatar size="avatar-xxxl " data={this.user1}></professional-avatar>
              <professional-avatar size="avatar-xxl " data={this.user1}></professional-avatar>
              <professional-avatar size="avatar-xl " data={this.user1}></professional-avatar>
              <professional-avatar size="avatar-lg " data={this.user1}></professional-avatar>
              <professional-avatar size="avatar-md " data={this.user1}></professional-avatar>
              <professional-avatar size="avatar-sm " data={this.user1}></professional-avatar>
              <professional-avatar size="avatar-xs " data={this.user1}></professional-avatar>
            </div>

            <div>
              <avatar-stack  size="avatar-xs" value={this.data}></avatar-stack>
              <avatar-stack  size="avatar-sm" value={this.data}></avatar-stack>
              <avatar-stack  size="avatar-md" value={this.data}></avatar-stack>
              <avatar-stack  size="avatar-lg" value={this.data}></avatar-stack>
              <avatar-stack  size="avatar-xl" value={this.data}></avatar-stack>
              <avatar-stack  size="avatar-xxl" value={this.data}></avatar-stack>
              <avatar-stack  size="avatar-xxxl" value={this.data}></avatar-stack>
            </div>

            <div class="d-flex" >
              <keka-avatar size="avatar-xxxl " shape="rounded" user={this.user1}></keka-avatar>
              <keka-avatar size="avatar-xxl " shape="rounded" user={this.user1}></keka-avatar>
              <keka-avatar size="avatar-xl " shape="rounded" user={this.user1}></keka-avatar>
              <keka-avatar size="avatar-lg " shape="rounded" user={this.user1}></keka-avatar>
              <keka-avatar size="avatar-md " shape="rounded" user={this.user1}></keka-avatar>
              <keka-avatar size="avatar-sm " shape="rounded" user={this.user1}></keka-avatar>
              <keka-avatar size="avatar-xs " shape="rounded" user={this.user1}></keka-avatar>
            </div>

            <div class="d-flex" >
              <keka-avatar size="avatar-xxxl " shape="squared" user={this.user1}></keka-avatar>
              <keka-avatar size="avatar-xxl " shape="squared" user={this.user1}></keka-avatar>
              <keka-avatar size="avatar-xl " shape="squared" user={this.user1}></keka-avatar>
              <keka-avatar size="avatar-lg " shape="squared" user={this.user1}></keka-avatar>
              <keka-avatar size="avatar-md " shape="squared" user={this.user1}></keka-avatar>
              <keka-avatar size="avatar-sm " shape="squared" user={this.user1}></keka-avatar>
              <keka-avatar size="avatar-xs " shape="squared" user={this.user1}></keka-avatar>
            </div>

            <div class="d-flex" >
              <keka-avatar size="avatar-xxxl " shape="rounded" user={this.user2}></keka-avatar>
              <keka-avatar size="avatar-xxl " shape="rounded" user={this.user2}></keka-avatar>
              <keka-avatar size="avatar-xl " shape="rounded" user={this.user2}></keka-avatar>
              <keka-avatar size="avatar-lg " shape="rounded" user={this.user2}></keka-avatar>
              <keka-avatar size="avatar-md " shape="rounded" user={this.user2}></keka-avatar>
              <keka-avatar size="avatar-sm " shape="rounded" user={this.user2}></keka-avatar>
              <keka-avatar size="avatar-xs " shape="rounded" user={this.user2}></keka-avatar>
            </div>

            <div class="d-flex">
              <keka-avatar size="avatar-xxxl " shape="squared" user={this.user2}></keka-avatar>
              <keka-avatar size="avatar-xxl " shape="squared" user={this.user2}></keka-avatar>
              <keka-avatar size="avatar-xl " shape="squared" user={this.user2}></keka-avatar>
              <keka-avatar size="avatar-lg " shape="squared" user={this.user2}></keka-avatar>
              <keka-avatar size="avatar-md " shape="squared" user={this.user2}></keka-avatar>
              <keka-avatar size="avatar-sm " shape="squared" user={this.user2}></keka-avatar>
              <keka-avatar size="avatar-xs " shape="squared" user={this.user2}></keka-avatar>
            </div>

            <div class="d-flex">
              <keka-avatar size="avatar-xxxl " shape="rounded" user={this.user3}></keka-avatar>
              <keka-avatar size="avatar-xxl " shape="rounded" user={this.user3}></keka-avatar>
              <keka-avatar size="avatar-xl " shape="rounded" user={this.user3}></keka-avatar>
              <keka-avatar size="avatar-lg " shape="rounded" user={this.user3}></keka-avatar>
              <keka-avatar size="avatar-md " shape="rounded" user={this.user3}></keka-avatar>
              <keka-avatar size="avatar-sm " shape="rounded" user={this.user3}></keka-avatar>
              <keka-avatar size="avatar-xs " shape="rounded" user={this.user3}></keka-avatar>
            </div>

            <div class="d-flex">
              <keka-avatar size="avatar-xxxl " shape="squared" user={this.user3}></keka-avatar>
              <keka-avatar size="avatar-xxl " shape="squared" user={this.user3}></keka-avatar>
              <keka-avatar size="avatar-xl " shape="squared" user={this.user3}></keka-avatar>
              <keka-avatar size="avatar-lg " shape="squared" user={this.user3}></keka-avatar>
              <keka-avatar size="avatar-md " shape="squared" user={this.user3}></keka-avatar>
              <keka-avatar size="avatar-sm " shape="squared" user={this.user3}></keka-avatar>
              <keka-avatar size="avatar-xs " shape="squared" user={this.user3}></keka-avatar>
            </div>
      </div>;
  }
}
