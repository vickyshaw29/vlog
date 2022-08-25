// Code generated by wunderctl. DO NOT EDIT.

import type {
	CreatePostResponse,
	CreatePostInput,
	CreatePostResponseData,
	DeletePostResponse,
	DeletePostInput,
	DeletePostResponseData,
	FakeWeatherResponse,
	FakeWeatherResponseData,
	HelloResponse,
	HelloResponseData,
	PastLaunchesResponse,
	PastLaunchesResponseData,
	PostsResponse,
	PostsResponseData,
	ProtectedWeatherResponse,
	ProtectedWeatherInput,
	ProtectedWeatherResponseData,
	WeatherResponse,
	WeatherInput,
	WeatherResponseData,
} from "./models";
import { createContext } from "react";
import {
	QueryArgsWithInput,
	SubscriptionArgs,
	SubscriptionArgsWithInput,
	hooks,
	WunderGraphContextProperties,
	Client,
} from "@wundergraph/nextjs";

export type Role = "admin" | "user";

export enum AuthProvider {
	"github" = "github",
}

export const AuthProviders = {
	github: AuthProvider.github,
};

export enum S3Provider {
	"minio" = "minio",
}

const defaultWunderGraphContextProperties: WunderGraphContextProperties<Role> = {
	ssrCache: {},
	client: null,
	clientConfig: {
		applicationHash: "7239faac",
		applicationPath: "api/main",
		baseURL: "http://localhost:9991",
		sdkVersion: "0.96.1",
		authenticationEnabled: true,
	},
	user: null,
	setUser: (value) => {},
	isWindowFocused: "pristine",
	setIsWindowFocused: (value) => {},
	refetchMountedOperations: 0,
	setRefetchMountedOperations: (value) => {},
};

export const WunderGraphContext = createContext<WunderGraphContextProperties<Role>>(
	defaultWunderGraphContextProperties
);

export const withWunderGraph = hooks.withWunderGraphContextWrapper(
	WunderGraphContext,
	defaultWunderGraphContextProperties
);

export const useWunderGraph = hooks.useWunderGraph<Role, AuthProvider, S3Provider>(WunderGraphContext);

export const useQuery = {
	ProtectedWeather: (args: QueryArgsWithInput<ProtectedWeatherInput>) =>
		hooks.useQueryWithInput<ProtectedWeatherInput, ProtectedWeatherResponseData, Role>(WunderGraphContext, {
			operationName: "ProtectedWeather",
			requiresAuthentication: true,
		})(args),
	Weather: (args: QueryArgsWithInput<WeatherInput>) =>
		hooks.useQueryWithInput<WeatherInput, WeatherResponseData, Role>(WunderGraphContext, {
			operationName: "Weather",
			requiresAuthentication: false,
		})(args),
	FakeWeather: hooks.useQueryWithoutInput<FakeWeatherResponseData, Role>(WunderGraphContext, {
		operationName: "FakeWeather",
		requiresAuthentication: false,
	}),
	Hello: hooks.useQueryWithoutInput<HelloResponseData, Role>(WunderGraphContext, {
		operationName: "Hello",
		requiresAuthentication: false,
	}),
	PastLaunches: hooks.useQueryWithoutInput<PastLaunchesResponseData, Role>(WunderGraphContext, {
		operationName: "PastLaunches",
		requiresAuthentication: false,
	}),
	Posts: hooks.useQueryWithoutInput<PostsResponseData, Role>(WunderGraphContext, {
		operationName: "Posts",
		requiresAuthentication: false,
	}),
};

export const useMutation = {
	CreatePost: () =>
		hooks.useMutationWithInput<CreatePostInput, CreatePostResponseData, Role>(WunderGraphContext, {
			operationName: "CreatePost",
			requiresAuthentication: false,
		}),
	DeletePost: () =>
		hooks.useMutationWithInput<DeletePostInput, DeletePostResponseData, Role>(WunderGraphContext, {
			operationName: "DeletePost",
			requiresAuthentication: false,
		}),
};

export const useSubscription = {};

export const useLiveQuery = {
	ProtectedWeather: (args: SubscriptionArgsWithInput<ProtectedWeatherInput>) =>
		hooks.useSubscriptionWithInput<ProtectedWeatherInput, ProtectedWeatherResponseData, Role>(WunderGraphContext, {
			operationName: "ProtectedWeather",
			isLiveQuery: true,
			requiresAuthentication: true,
		})(args),
	Weather: (args: SubscriptionArgsWithInput<WeatherInput>) =>
		hooks.useSubscriptionWithInput<WeatherInput, WeatherResponseData, Role>(WunderGraphContext, {
			operationName: "Weather",
			isLiveQuery: true,
			requiresAuthentication: false,
		})(args),
	FakeWeather: (args?: SubscriptionArgs) =>
		hooks.useSubscriptionWithoutInput<FakeWeatherResponseData, Role>(WunderGraphContext, {
			operationName: "FakeWeather",
			isLiveQuery: true,
			requiresAuthentication: false,
		})(args),
	Hello: (args?: SubscriptionArgs) =>
		hooks.useSubscriptionWithoutInput<HelloResponseData, Role>(WunderGraphContext, {
			operationName: "Hello",
			isLiveQuery: true,
			requiresAuthentication: false,
		})(args),
	PastLaunches: (args?: SubscriptionArgs) =>
		hooks.useSubscriptionWithoutInput<PastLaunchesResponseData, Role>(WunderGraphContext, {
			operationName: "PastLaunches",
			isLiveQuery: true,
			requiresAuthentication: false,
		})(args),
	Posts: (args?: SubscriptionArgs) =>
		hooks.useSubscriptionWithoutInput<PostsResponseData, Role>(WunderGraphContext, {
			operationName: "Posts",
			isLiveQuery: true,
			requiresAuthentication: false,
		})(args),
};