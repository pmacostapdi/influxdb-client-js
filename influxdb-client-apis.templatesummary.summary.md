<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@influxdata/influxdb-client-apis](./influxdb-client-apis.md) &gt; [TemplateSummary](./influxdb-client-apis.templatesummary.md) &gt; [summary](./influxdb-client-apis.templatesummary.summary.md)

## TemplateSummary.summary property

<b>Signature:</b>

```typescript
summary?: {
        buckets?: Array<{
            id?: string;
            orgID?: string;
            kind?: TemplateKind;
            templateMetaName?: string;
            name?: string;
            description?: string;
            retentionPeriod?: number;
            labelAssociations?: TemplateSummaryLabel[];
            envReferences?: TemplateEnvReferences;
        }>;
        checks?: Array<CheckDiscriminator & {
            kind?: TemplateKind;
            templateMetaName?: string;
            labelAssociations?: TemplateSummaryLabel[];
            envReferences?: TemplateEnvReferences;
        }>;
        dashboards?: Array<{
            id?: string;
            orgID?: string;
            kind?: TemplateKind;
            templateMetaName?: string;
            name?: string;
            description?: string;
            labelAssociations?: TemplateSummaryLabel[];
            charts?: TemplateChart[];
            envReferences?: TemplateEnvReferences;
        }>;
        labels?: TemplateSummaryLabel[];
        labelMappings?: Array<{
            status?: string;
            resourceTemplateMetaName?: string;
            resourceName?: string;
            resourceID?: string;
            resourceType?: string;
            labelTemplateMetaName?: string;
            labelName?: string;
            labelID?: string;
        }>;
        missingEnvRefs?: string[];
        missingSecrets?: string[];
        notificationEndpoints?: Array<NotificationEndpointDiscriminator & {
            kind?: TemplateKind;
            templateMetaName?: string;
            labelAssociations?: TemplateSummaryLabel[];
            envReferences?: TemplateEnvReferences;
        }>;
        notificationRules?: Array<{
            kind?: TemplateKind;
            templateMetaName?: string;
            name?: string;
            description?: string;
            endpointTemplateMetaName?: string;
            endpointID?: string;
            endpointType?: string;
            every?: string;
            offset?: string;
            messageTemplate?: string;
            status?: string;
            statusRules?: Array<{
                currentLevel?: string;
                previousLevel?: string;
            }>;
            tagRules?: Array<{
                key?: string;
                value?: string;
                operator?: string;
            }>;
            labelAssociations?: TemplateSummaryLabel[];
            envReferences?: TemplateEnvReferences;
        }>;
        tasks?: Array<{
            kind?: TemplateKind;
            templateMetaName?: string;
            id?: string;
            name?: string;
            cron?: string;
            description?: string;
            every?: string;
            offset?: string;
            query?: string;
            status?: string;
            envReferences?: TemplateEnvReferences;
        }>;
        telegrafConfigs?: Array<TelegrafRequest & {
            kind?: TemplateKind;
            templateMetaName?: string;
            labelAssociations?: TemplateSummaryLabel[];
            envReferences?: TemplateEnvReferences;
        }>;
        variables?: Array<{
            kind?: TemplateKind;
            templateMetaName?: string;
            id?: string;
            orgID?: string;
            name?: string;
            description?: string;
            arguments?: VariableProperties;
            labelAssociations?: TemplateSummaryLabel[];
            envReferences?: TemplateEnvReferences;
        }>;
    };
```