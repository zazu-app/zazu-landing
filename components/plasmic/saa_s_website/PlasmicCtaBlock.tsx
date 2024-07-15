// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3ANMJmRMrYZuN2eTrhtZhF
// Component: jT_BkuGgyhPS

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import Button from "../../Button"; // plasmic-import: 4uc5kP8l8A4m/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 3ANMJmRMrYZuN2eTrhtZhF/projectcss
import sty from "./PlasmicCtaBlock.module.css"; // plasmic-import: jT_BkuGgyhPS/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: JYvICnJX2T43/icon

createPlasmicElementProxy;

export type PlasmicCtaBlock__VariantMembers = {};
export type PlasmicCtaBlock__VariantsArgs = {};
type VariantPropType = keyof PlasmicCtaBlock__VariantsArgs;
export const PlasmicCtaBlock__VariantProps = new Array<VariantPropType>();

export type PlasmicCtaBlock__ArgsType = {};
type ArgPropType = keyof PlasmicCtaBlock__ArgsType;
export const PlasmicCtaBlock__ArgProps = new Array<ArgPropType>();

export type PlasmicCtaBlock__OverridesType = {
  root?: Flex__<"section">;
  outer?: Flex__<"div">;
  container?: Flex__<"div">;
  h2?: Flex__<"h2">;
  button?: Flex__<typeof Button>;
};

export interface DefaultCtaBlockProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicCtaBlock__RenderFunc(props: {
  variants: PlasmicCtaBlock__VariantsArgs;
  args: PlasmicCtaBlock__ArgsType;
  overrides: PlasmicCtaBlock__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  return (
    <section
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"outer"}
        data-plasmic-override={overrides.outer}
        className={classNames(projectcss.all, sty.outer)}
      >
        <div
          data-plasmic-name={"container"}
          data-plasmic-override={overrides.container}
          className={classNames(projectcss.all, sty.container)}
        >
          <div className={classNames(projectcss.all, sty.column__pdEA)}>
            <h2
              data-plasmic-name={"h2"}
              data-plasmic-override={overrides.h2}
              className={classNames(
                projectcss.all,
                projectcss.h2,
                projectcss.__wab_text,
                sty.h2
              )}
            >
              {"To Make Requests For The\nFurther Information"}
            </h2>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__a9NZz
              )}
            >
              {"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.column__nuCtN)}>
            <Button
              data-plasmic-name={"button"}
              data-plasmic-override={overrides.button}
              className={classNames("__wab_instance", sty.button)}
              color={"blue"}
              link={"#"}
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__c2PtH
                )}
              >
                {"Join With Now"}
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "outer", "container", "h2", "button"],
  outer: ["outer", "container", "h2", "button"],
  container: ["container", "h2", "button"],
  h2: ["h2"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "section";
  outer: "div";
  container: "div";
  h2: "h2";
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCtaBlock__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCtaBlock__VariantsArgs;
    args?: PlasmicCtaBlock__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCtaBlock__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCtaBlock__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicCtaBlock__ArgProps,
          internalVariantPropNames: PlasmicCtaBlock__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCtaBlock__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCtaBlock";
  } else {
    func.displayName = `PlasmicCtaBlock.${nodeName}`;
  }
  return func;
}

export const PlasmicCtaBlock = Object.assign(
  // Top-level PlasmicCtaBlock renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    outer: makeNodeComponent("outer"),
    container: makeNodeComponent("container"),
    h2: makeNodeComponent("h2"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicCtaBlock
    internalVariantProps: PlasmicCtaBlock__VariantProps,
    internalArgProps: PlasmicCtaBlock__ArgProps
  }
);

export default PlasmicCtaBlock;
/* prettier-ignore-end */
