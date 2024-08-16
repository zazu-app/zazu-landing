// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3ANMJmRMrYZuN2eTrhtZhF
// Component: abUuZ_OBzqIx

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
import sty from "./PlasmicHeader2.module.css"; // plasmic-import: abUuZ_OBzqIx/css

import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: NBclej6tpD3v/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: JYvICnJX2T43/icon

createPlasmicElementProxy;

export type PlasmicHeader2__VariantMembers = {};
export type PlasmicHeader2__VariantsArgs = {};
type VariantPropType = keyof PlasmicHeader2__VariantsArgs;
export const PlasmicHeader2__VariantProps = new Array<VariantPropType>();

export type PlasmicHeader2__ArgsType = {
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicHeader2__ArgsType;
export const PlasmicHeader2__ArgProps = new Array<ArgPropType>("children");

export type PlasmicHeader2__OverridesType = {
  root?: Flex__<"div">;
};

export interface DefaultHeader2Props {
  children?: React.ReactNode;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHeader2__RenderFunc(props: {
  variants: PlasmicHeader2__VariantsArgs;
  args: PlasmicHeader2__ArgsType;
  overrides: PlasmicHeader2__OverridesType;
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
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
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
      <Stack__
        as={PlasmicLink__}
        hasGap={true}
        className={classNames(projectcss.all, projectcss.a, sty.link__ypPuC)}
        component={Link}
        href={`/features`}
        platform={"nextjs"}
      >
        <IconIcon
          className={classNames(projectcss.all, sty.svg___4Hq0B)}
          role={"img"}
        />

        <span
          className={classNames(
            projectcss.all,
            projectcss.span,
            projectcss.__wab_text,
            sty.span___5AUxn
          )}
        >
          {"Funcionalidades"}
        </span>
        {false ? (
          <IconIcon
            className={classNames(projectcss.all, sty.svg__tbu2K)}
            role={"img"}
          />
        ) : null}
      </Stack__>
      <Stack__
        as={PlasmicLink__}
        hasGap={true}
        className={classNames(projectcss.all, projectcss.a, sty.link__rglhe)}
        component={Link}
        href={`/pricing`}
        platform={"nextjs"}
      >
        <IconIcon
          className={classNames(projectcss.all, sty.svg__fntRq)}
          role={"img"}
        />

        <span
          className={classNames(
            projectcss.all,
            projectcss.span,
            projectcss.__wab_text,
            sty.span__phjX9
          )}
        >
          {"Planes"}
        </span>
        <IconIcon
          className={classNames(projectcss.all, sty.svg___5KIgC)}
          role={"img"}
        />
      </Stack__>
      <Stack__
        as={PlasmicLink__}
        hasGap={true}
        className={classNames(projectcss.all, projectcss.a, sty.link__kQbsr)}
        component={Link}
        href={`/contact`}
        platform={"nextjs"}
      >
        {false ? (
          <IconIcon
            className={classNames(projectcss.all, sty.svg__cdwsN)}
            role={"img"}
          />
        ) : null}
        <span
          className={classNames(
            projectcss.all,
            projectcss.span,
            projectcss.__wab_text,
            sty.span__yfFk9
          )}
        >
          {"Contacto"}
        </span>
        {false ? (
          <IconIcon
            className={classNames(projectcss.all, sty.svg___2SrYf)}
            role={"img"}
          />
        ) : null}
      </Stack__>
      {renderPlasmicSlot({
        defaultContents: (
          <Button
            className={classNames("__wab_instance", sty.button__owmGf)}
            shape={"rounded"}
            submitsForm={true}
          >
            {"Get started"}
          </Button>
        ),
        value: args.children
      })}
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHeader2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHeader2__VariantsArgs;
    args?: PlasmicHeader2__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHeader2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHeader2__ArgsType,
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
          internalArgPropNames: PlasmicHeader2__ArgProps,
          internalVariantPropNames: PlasmicHeader2__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHeader2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeader2";
  } else {
    func.displayName = `PlasmicHeader2.${nodeName}`;
  }
  return func;
}

export const PlasmicHeader2 = Object.assign(
  // Top-level PlasmicHeader2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicHeader2
    internalVariantProps: PlasmicHeader2__VariantProps,
    internalArgProps: PlasmicHeader2__ArgProps
  }
);

export default PlasmicHeader2;
/* prettier-ignore-end */
