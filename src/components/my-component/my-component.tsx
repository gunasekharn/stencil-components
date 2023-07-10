import { Component,  h } from '@stencil/core';

import { Users } from '../../model';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  data:Users[] =[
    {
        name: "vijay simha reddy kamidi",
        email:"vijay@gmail.com",
        profile:'../../assets/profilePicture.png',
        designation:"designer"
    },
    {
        name: "vijay simha ",
        email:"vijay@gmail.com",
        profile:'../../assets/profilePicture.png',
        designation:"product engineer"
    },
    {
        name: "vijay simha reddy ",
        email:"vijay@gmail.com",
        profile:"../../assets/profilePicture.png",
        designation:"frontend developer"
    },
    {
        name: "vijay  ",
        email:"vijay@gmail.com",
        profile:"../../assets/profilePicture.png",
        designation:"backend developer"
    },
    {
        name: "ajay ",
        email:"vijay@gmail.com",
        profile:"../../assets/profilePicture.png",
        designation:"app developer"
    },
    {
        name: "sanjay",
        email:"vijay@gmail.com",
        profile:"../../assets/profilePicture.png",
        designation:"designer"
    },
    {
        name: "nagateja vijay arisetti",
        email:"vijay@gmail.com",
        profile:"../../assets/profilePicture.png",
        designation:"head technology"
    },
    {
      name: "vijay simha kingsman",
      email:"vijay@gmail.com",
      profile:'../../assets/profilePicture.png',
      designation:"product engineer"
  },
  // {
  //     name: "vijay simha arisetti",
  //     email:"vijay@gmail.com",
  //     profile:"././assets/profilePicture.png",
  //     designation:"frontend developer"
  // },
  // {
  //     name: "kamidi vijay simha reddy  ",
  //     email:"vijay@gmail.com",
  //     profile:"././assets/profilePicture.png",
  //     designation:"backend developer"
  // },
  // {
  //     name: "nagateja setti",
  //     email:"vijay@gmail.com",
  //     profile:"././assets/profilePicture.png",
  //     designation:"app developer"
  // },
  // {
  //   name: "vijay simha reddy kamidi",
  //   email:"vijay@gmail.com",
  //   profile:'././assets/profilePicture.png',
  //   designation:"designer"
  // },
  // {
  //     name: "vijay simha ",
  //     email:"vijay@gmail.com",
  //     profile:'././assets/profilePicture.png',
  //     designation:"product engineer"
  // },
  // {
  //     name: "vijay simha reddy ",
  //     email:"vijay@gmail.com",
  //     profile:"././assets/profilePicture.png",
  //     designation:"frontend developer"
  // },
  // {
  //     name: "vijay  ",
  //     email:"vijay@gmail.com",
  //     profile:"././assets/profilePicture.png",
  //     designation:"backend developer"
  // },
  // {
  //     name: "nagateja vijay simha reddy ",
  //     email:"vijay@gmail.com",
  //     profile:"././assets/profilePicture.png",
  //     designation:"app developer"
  // },
  // {
  //     name: "vijay simha reddy  isetti",
  //     email:"vijay@gmail.com",
  //     profile:"././assets/profilePicture.png",
  //     designation:"designer"
  // },
  // {
  //     name: "nagateja vijay arisetti",
  //     email:"vijay@gmail.com",
  //     profile:"././assets/profilePicture.png",
  //     designation:"head technology"
  // },
  // {
  //   name: "vijay simha kingsman",
  //   email:"vijay@gmail.com",
  //   profile:'././assets/profilePicture.png',
  //   designation:"product engineer"
  // },
  // {
  //   name: "vijay simha arisetti",
  //   email:"vijay@gmail.com",
  //   profile:"././assets/profilePicture.png",
  //   designation:"frontend developer"
  // },
  // {
  //   name: "kamidi vijay simha reddy  ",
  //   email:"vijay@gmail.com",
  //   profile:"././assets/profilePicture.png",
  //   designation:"backend developer"
  // },
  // {
  //   name: "nagateja setti",
  //   email:"vijay@gmail.com",
  //   profile:"././assets/profilePicture.png",
  //   designation:"app developer"
  // }
    
  ];
  user1:Users={
    name: "nagateja pillar",
    email:"vijay@gmail.com",
    profile:"../../assets/profilePicture.png",
    designation:"frontend dev"
  };
  user2:Users={
    name: "nagateja setti",
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
      <h1>component/input</h1>
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
              {/* <avatar-stack  size="avatar-xs" value={this.data}></avatar-stack>
              <avatar-stack  size="avatar-sm" value={this.data}></avatar-stack>
              <avatar-stack  size="avatar-md" value={this.data}></avatar-stack>
              <avatar-stack  size="avatar-lg" value={this.data}></avatar-stack>
              <avatar-stack  size="avatar-xl" value={this.data}></avatar-stack> */}
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

            <div class={"d-flex"}>

              <div class={" m-1"}>
                <progress-indicator fill={30}  ></progress-indicator>
                <progress-indicator fill={20} ></progress-indicator>
                {/* <progress-indicator fill={10} ></progress-indicator>
                <progress-indicator fill={30} ></progress-indicator>
                <progress-indicator fill={40} ></progress-indicator>
                <progress-indicator fill={50} ></progress-indicator>
                <progress-indicator fill={60} ></progress-indicator>
                <progress-indicator fill={70} ></progress-indicator>
                <progress-indicator fill={80} ></progress-indicator>
                <progress-indicator fill={90} ></progress-indicator>
                <progress-indicator fill={100} ></progress-indicator> */}
              </div>
              <div class={" m-1"}>
                <progress-indicator fill={30}  showLabel></progress-indicator>
                <progress-indicator fill={20} showLabel></progress-indicator>
                {/* <progress-indicator fill={10} showLabel ></progress-indicator>
                <progress-indicator fill={30} showLabel></progress-indicator>
                <progress-indicator fill={40} showLabel></progress-indicator>
                <progress-indicator fill={50} showLabel></progress-indicator>
                <progress-indicator fill={60} showLabel></progress-indicator>
                <progress-indicator fill={70} showLabel></progress-indicator>
                <progress-indicator fill={80} showLabel></progress-indicator>
                <progress-indicator fill={90} showLabel></progress-indicator>
                <progress-indicator fill={100} showLabel></progress-indicator> */}
              </div>

              <div class={" m-1"}>
                <progress-indicator fill={30} showLabel tooltip></progress-indicator>
                <progress-indicator fill={20} tooltip></progress-indicator>
                {/* <progress-indicator fill={10} tooltip></progress-indicator>
                <progress-indicator fill={30} tooltip></progress-indicator>
                <progress-indicator fill={40} tooltip></progress-indicator>
                <progress-indicator fill={50} tooltip></progress-indicator>
                <progress-indicator fill={60} tooltip></progress-indicator>
                <progress-indicator fill={70} tooltip></progress-indicator>
                <progress-indicator fill={80} tooltip></progress-indicator>
                <progress-indicator fill={90} tooltip></progress-indicator>
                <progress-indicator fill={100} tooltip></progress-indicator> */}
              </div>
            </div>

            <div class={"d-flex"}>
              <keka-input ></keka-input>
              <keka-input size="sm" ></keka-input>              
            </div>
            <div class={"d-flex"}>
              <keka-input variant="secondary"></keka-input>
              <keka-input size="sm" variant="secondary"></keka-input>
            </div>
            
      </div>;

  }
}
