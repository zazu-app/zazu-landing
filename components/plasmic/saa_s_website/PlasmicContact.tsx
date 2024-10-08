// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3ANMJmRMrYZuN2eTrhtZhF
// Component: iUqDppGnZDHc

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

import Header from "../../Header"; // plasmic-import: UhNEmsPsaOLS/component
import TextInput from "../../TextInput"; // plasmic-import: mVDQhSZnr0H4/component
import Select from "../../Select"; // plasmic-import: Ax2_XK3-BHKM/component
import Select__Option from "../../Select__Option"; // plasmic-import: bFDQt5A9LzUn/component
import Checkbox from "../../Checkbox"; // plasmic-import: 6apSrElTkAKS/component
import Button from "../../Button"; // plasmic-import: 4uc5kP8l8A4m/component
import Footer from "../../Footer"; // plasmic-import: NuqX60hlTorY/component

import { useScreenVariants as useScreenVariantsquHCgLsadSrl } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: quHCgLSADSrl/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 3ANMJmRMrYZuN2eTrhtZhF/projectcss
import sty from "./PlasmicContact.module.css"; // plasmic-import: iUqDppGnZDHc/css

import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: pOlO0Pk2e9Zb/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: JYvICnJX2T43/icon
import ArrowRightsvgIcon from "./icons/PlasmicIcon__ArrowRightsvg"; // plasmic-import: 48peJZS1xju3/icon

createPlasmicElementProxy;

export type PlasmicContact__VariantMembers = {};
export type PlasmicContact__VariantsArgs = {};
type VariantPropType = keyof PlasmicContact__VariantsArgs;
export const PlasmicContact__VariantProps = new Array<VariantPropType>();

export type PlasmicContact__ArgsType = {};
type ArgPropType = keyof PlasmicContact__ArgsType;
export const PlasmicContact__ArgProps = new Array<ArgPropType>();

export type PlasmicContact__OverridesType = {
  root?: Flex__<"div">;
  header?: Flex__<typeof Header>;
  pageBanner?: Flex__<"div">;
  h1?: Flex__<"h1">;
  mainSection?: Flex__<"div">;
  container4?: Flex__<"div">;
  h3?: Flex__<"h3">;
  textInput?: Flex__<typeof TextInput>;
  textInput2?: Flex__<typeof TextInput>;
  select?: Flex__<typeof Select>;
  textarea?: Flex__<"textarea">;
  checkbox?: Flex__<typeof Checkbox>;
  button?: Flex__<typeof Button>;
  svg?: Flex__<"svg">;
  footer?: Flex__<typeof Footer>;
};

export interface DefaultContactProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicContact__RenderFunc(props: {
  variants: PlasmicContact__VariantsArgs;
  args: PlasmicContact__ArgsType;
  overrides: PlasmicContact__OverridesType;
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "textInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "textInput2.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "select.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "checkbox.isChecked",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsquHCgLsadSrl()
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
          />

          <div
            data-plasmic-name={"pageBanner"}
            data-plasmic-override={overrides.pageBanner}
            className={classNames(projectcss.all, sty.pageBanner)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__ljyUu)}>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.columns___6OOr)}
              >
                <div className={classNames(projectcss.all, sty.column__fDj4P)}>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__olElj)}
                  >
                    <h1
                      data-plasmic-name={"h1"}
                      data-plasmic-override={overrides.h1}
                      className={classNames(
                        projectcss.all,
                        projectcss.h1,
                        projectcss.__wab_text,
                        sty.h1
                      )}
                    >
                      {"Contact Us"}
                    </h1>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__bko4V
                      )}
                    >
                      {
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
                      }
                    </div>
                  </Stack__>
                </div>
                <div className={classNames(projectcss.all, sty.column__qIBtx)}>
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img___3V4V3)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={
                      hasVariant(globalVariants, "screen", "mobileOnly")
                        ? "100%"
                        : "100%"
                    }
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"auto"}
                    loading={
                      hasVariant(globalVariants, "screen", "mobileOnly")
                        ? "lazy"
                        : "lazy"
                    }
                    src={
                      hasVariant(globalVariants, "screen", "mobileOnly")
                        ? {
                            src: "/plasmic/saa_s_website/images/stephenPhillipsHostreviewsCoUk3Mhgvrk4TjMUnsplashjpg.jpg",
                            fullWidth: 1920,
                            fullHeight: 1280,
                            aspectRatio: undefined
                          }
                        : {
                            src: "/plasmic/saa_s_website/images/stephenPhillipsHostreviewsCoUk3Mhgvrk4TjMUnsplashjpg.jpg",
                            fullWidth: 1920,
                            fullHeight: 1280,
                            aspectRatio: undefined
                          }
                    }
                  />
                </div>
              </Stack__>
            </div>
          </div>
          <div
            data-plasmic-name={"mainSection"}
            data-plasmic-override={overrides.mainSection}
            className={classNames(projectcss.all, sty.mainSection)}
          >
            <div className={classNames(projectcss.all, sty.columns__jr5Df)}>
              <div className={classNames(projectcss.all, sty.column___294Y2)}>
                <div
                  data-plasmic-name={"container4"}
                  data-plasmic-override={overrides.container4}
                  className={classNames(projectcss.all, sty.container4)}
                >
                  <h3
                    data-plasmic-name={"h3"}
                    data-plasmic-override={overrides.h3}
                    className={classNames(
                      projectcss.all,
                      projectcss.h3,
                      projectcss.__wab_text,
                      sty.h3
                    )}
                  >
                    {"Get in touch"}
                  </h3>
                  <label
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.label__clyj0
                    )}
                  >
                    {"Name"}
                  </label>
                  <TextInput
                    data-plasmic-name={"textInput"}
                    data-plasmic-override={overrides.textInput}
                    className={classNames("__wab_instance", sty.textInput)}
                    onChange={(...eventArgs) => {
                      generateStateOnChangeProp($state, ["textInput", "value"])(
                        (e => e.target?.value).apply(null, eventArgs)
                      );
                    }}
                    placeholder={" "}
                    value={
                      generateStateValueProp($state, ["textInput", "value"]) ??
                      ""
                    }
                  />

                  <label
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.label__bileA
                    )}
                  >
                    {"Email"}
                  </label>
                  <TextInput
                    data-plasmic-name={"textInput2"}
                    data-plasmic-override={overrides.textInput2}
                    className={classNames("__wab_instance", sty.textInput2)}
                    onChange={(...eventArgs) => {
                      generateStateOnChangeProp($state, [
                        "textInput2",
                        "value"
                      ])((e => e.target?.value).apply(null, eventArgs));
                    }}
                    placeholder={" "}
                    value={
                      generateStateValueProp($state, ["textInput2", "value"]) ??
                      ""
                    }
                  />

                  <label
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.label__uqoS6
                    )}
                  >
                    {"Subject"}
                  </label>
                  <Select
                    data-plasmic-name={"select"}
                    data-plasmic-override={overrides.select}
                    className={classNames("__wab_instance", sty.select)}
                    onChange={(...eventArgs) => {
                      generateStateOnChangeProp($state, ["select", "value"])(
                        eventArgs[0]
                      );
                    }}
                    placeholder={"Please select"}
                    value={generateStateValueProp($state, ["select", "value"])}
                  />

                  <label
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.label__beiyn
                    )}
                  >
                    {"Message"}
                  </label>
                  <textarea
                    data-plasmic-name={"textarea"}
                    data-plasmic-override={overrides.textarea}
                    className={classNames(
                      projectcss.all,
                      projectcss.textarea,
                      sty.textarea
                    )}
                    value={""}
                  />

                  <Checkbox
                    data-plasmic-name={"checkbox"}
                    data-plasmic-override={overrides.checkbox}
                    className={classNames("__wab_instance", sty.checkbox)}
                    isChecked={
                      generateStateValueProp($state, [
                        "checkbox",
                        "isChecked"
                      ]) ?? false
                    }
                    onChange={(...eventArgs) => {
                      generateStateOnChangeProp($state, [
                        "checkbox",
                        "isChecked"
                      ])(eventArgs[0]);
                    }}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__qm48T
                      )}
                    >
                      {hasVariant(globalVariants, "screen", "mobileOnly")
                        ? "I understand that this form is \nstoring my submitted information \nso I can be contacted."
                        : "I understand that this form is storing"}
                    </div>
                  </Checkbox>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__qvK9Y)}
                  >
                    <Button
                      data-plasmic-name={"button"}
                      data-plasmic-override={overrides.button}
                      className={classNames("__wab_instance", sty.button)}
                      color={"blue"}
                      endIcon={
                        <ArrowRightsvgIcon
                          data-plasmic-name={"svg"}
                          data-plasmic-override={overrides.svg}
                          className={classNames(projectcss.all, sty.svg)}
                          role={"img"}
                        />
                      }
                      shape={"rounded"}
                      showEndIcon={true}
                      submitsForm={true}
                    >
                      {"Start Now"}
                    </Button>
                  </div>
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.column__wgsQd)}>
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__gb5G9)}
                  displayHeight={"100%"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"100%"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/saa_s_website/images/corinneKutzTMi2R5NfoUnsplashjpg.jpg",
                    fullWidth: 1920,
                    fullHeight: 1280,
                    aspectRatio: undefined
                  }}
                />
              </div>
            </div>
          </div>
          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </Stack__>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "header",
    "pageBanner",
    "h1",
    "mainSection",
    "container4",
    "h3",
    "textInput",
    "textInput2",
    "select",
    "textarea",
    "checkbox",
    "button",
    "svg",
    "footer"
  ],
  header: ["header"],
  pageBanner: ["pageBanner", "h1"],
  h1: ["h1"],
  mainSection: [
    "mainSection",
    "container4",
    "h3",
    "textInput",
    "textInput2",
    "select",
    "textarea",
    "checkbox",
    "button",
    "svg"
  ],
  container4: [
    "container4",
    "h3",
    "textInput",
    "textInput2",
    "select",
    "textarea",
    "checkbox",
    "button",
    "svg"
  ],
  h3: ["h3"],
  textInput: ["textInput"],
  textInput2: ["textInput2"],
  select: ["select"],
  textarea: ["textarea"],
  checkbox: ["checkbox"],
  button: ["button", "svg"],
  svg: ["svg"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  pageBanner: "div";
  h1: "h1";
  mainSection: "div";
  container4: "div";
  h3: "h3";
  textInput: typeof TextInput;
  textInput2: typeof TextInput;
  select: typeof Select;
  textarea: "textarea";
  checkbox: typeof Checkbox;
  button: typeof Button;
  svg: "svg";
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicContact__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicContact__VariantsArgs;
    args?: PlasmicContact__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicContact__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicContact__ArgsType,
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
          internalArgPropNames: PlasmicContact__ArgProps,
          internalVariantPropNames: PlasmicContact__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicContact__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicContact";
  } else {
    func.displayName = `PlasmicContact.${nodeName}`;
  }
  return func;
}

export const PlasmicContact = Object.assign(
  // Top-level PlasmicContact renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    pageBanner: makeNodeComponent("pageBanner"),
    h1: makeNodeComponent("h1"),
    mainSection: makeNodeComponent("mainSection"),
    container4: makeNodeComponent("container4"),
    h3: makeNodeComponent("h3"),
    textInput: makeNodeComponent("textInput"),
    textInput2: makeNodeComponent("textInput2"),
    select: makeNodeComponent("select"),
    textarea: makeNodeComponent("textarea"),
    checkbox: makeNodeComponent("checkbox"),
    button: makeNodeComponent("button"),
    svg: makeNodeComponent("svg"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicContact
    internalVariantProps: PlasmicContact__VariantProps,
    internalArgProps: PlasmicContact__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicContact;
/* prettier-ignore-end */
