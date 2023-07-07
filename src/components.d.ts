/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface KekaDropdown {
    }
    interface KekaDropdownItem {
    }
    interface KekaGlobalHeader {
    }
    interface KekaTabBar {
    }
    interface KekaTabItem {
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLKekaDropdownElement extends Components.KekaDropdown, HTMLStencilElement {
    }
    var HTMLKekaDropdownElement: {
        prototype: HTMLKekaDropdownElement;
        new (): HTMLKekaDropdownElement;
    };
    interface HTMLKekaDropdownItemElement extends Components.KekaDropdownItem, HTMLStencilElement {
    }
    var HTMLKekaDropdownItemElement: {
        prototype: HTMLKekaDropdownItemElement;
        new (): HTMLKekaDropdownItemElement;
    };
    interface HTMLKekaGlobalHeaderElement extends Components.KekaGlobalHeader, HTMLStencilElement {
    }
    var HTMLKekaGlobalHeaderElement: {
        prototype: HTMLKekaGlobalHeaderElement;
        new (): HTMLKekaGlobalHeaderElement;
    };
    interface HTMLKekaTabBarElement extends Components.KekaTabBar, HTMLStencilElement {
    }
    var HTMLKekaTabBarElement: {
        prototype: HTMLKekaTabBarElement;
        new (): HTMLKekaTabBarElement;
    };
    interface HTMLKekaTabItemElement extends Components.KekaTabItem, HTMLStencilElement {
    }
    var HTMLKekaTabItemElement: {
        prototype: HTMLKekaTabItemElement;
        new (): HTMLKekaTabItemElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "keka-dropdown": HTMLKekaDropdownElement;
        "keka-dropdown-item": HTMLKekaDropdownItemElement;
        "keka-global-header": HTMLKekaGlobalHeaderElement;
        "keka-tab-bar": HTMLKekaTabBarElement;
        "keka-tab-item": HTMLKekaTabItemElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface KekaDropdown {
    }
    interface KekaDropdownItem {
    }
    interface KekaGlobalHeader {
    }
    interface KekaTabBar {
    }
    interface KekaTabItem {
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "keka-dropdown": KekaDropdown;
        "keka-dropdown-item": KekaDropdownItem;
        "keka-global-header": KekaGlobalHeader;
        "keka-tab-bar": KekaTabBar;
        "keka-tab-item": KekaTabItem;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "keka-dropdown": LocalJSX.KekaDropdown & JSXBase.HTMLAttributes<HTMLKekaDropdownElement>;
            "keka-dropdown-item": LocalJSX.KekaDropdownItem & JSXBase.HTMLAttributes<HTMLKekaDropdownItemElement>;
            "keka-global-header": LocalJSX.KekaGlobalHeader & JSXBase.HTMLAttributes<HTMLKekaGlobalHeaderElement>;
            "keka-tab-bar": LocalJSX.KekaTabBar & JSXBase.HTMLAttributes<HTMLKekaTabBarElement>;
            "keka-tab-item": LocalJSX.KekaTabItem & JSXBase.HTMLAttributes<HTMLKekaTabItemElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
