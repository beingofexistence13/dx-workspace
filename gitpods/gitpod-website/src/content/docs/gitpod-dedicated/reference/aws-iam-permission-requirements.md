---
section: gitpod-dedicated/reference
title: Infrastructure cost - Gitpod Dedicated docs
---

# AWS IAM permission requirements

> ℹ️ For more information on how and when these permissions are used, please see [Deployment and Updates](/docs/gitpod-dedicated/background/deployment-updates).

**Glossary**: <br/>

-   Substrate = The control plane that manages Gitpod Dedicated instances <br/>
-   Bootstrap = Initial set up required to create an instance of Gitpod Dedicated <br/>
-   Cell = An instance of Gitpod Dedicated

Gitpod Dedicated requires different sets of permissions to function. These vary depending on the phase of operation:

-   Permissions needed to execute the CloudFormation template that installs the Gitpod Infrastructure
-   Permissions needed by the instance to bootstrap and operate
-   Debugging role that can be assumed by the customer only

For more information on the phases during which these permissions are needed and how they relate, please refer to [Deployment and Updates](/docs/gitpod-dedicated/background/deployment-updates).

<details>

<summary class="text-p-medium mt-8 text-important"><b>Permissions needed to execute the CloudFormation template that installs the Gitpod Infrastructure</b></summary>

<div class="ml-4 mt-2">

The permissions needed for this are defined by a separate CloudFormation which is first applied in the AWS account that Gitpod is to be installed into. More information on this can be found in the [Getting Started guide](/docs/gitpod-dedicated/guides/getting-started).

</div>

</details>

<details>

<summary class="text-p-medium mt-8 text-important"><b>Permissions needed by the instance to bootstrap and operate</b></summary>

<div class="ml-4 mt-2">

During operations, the following permissions are required for a Gitpod Dedicated instance to run within a customer's AWS account. No permission to assume a role/permission from outside is needed.

<details>
<summary><b>Permissions required by an instance named <code>foobar</code>:</b></summary>

```json
{
  "key": "vpcflowlogsroleA49E581D",
  "value": {
    "Type": "AWS::IAM::Role",
    "Properties": {
      "AssumeRolePolicyDocument": {
        "Statement": [
          {
            "Action": "sts:AssumeRole",
            "Effect": "Allow",
            "Principal": {
              "Service": "vpc-flow-logs.amazonaws.com"
            }
          }
        ],
        "Version": "2012-10-17"
      }
    },
    "Metadata": {
      "aws:cdk:path": "gitpod-cell/vpc-flow-logs-role/Resource"
    }
  }
}
{
  "key": "vpcflowlogsroleDefaultPolicyAAD1B3D4",
  "value": {
    "Type": "AWS::IAM::Policy",
    "Properties": {
      "PolicyDocument": {
        "Statement": [
          {
            "Action": [
              "logs:CreateLogStream",
              "logs:PutLogEvents",
              "logs:DescribeLogStreams"
            ],
            "Effect": "Allow",
            "Resource": {
              "Fn::GetAtt": [
                "vpcflowlogsgroup4676BF4E",
                "Arn"
              ]
            }
          },
          {
            "Action": "iam:PassRole",
            "Effect": "Allow",
            "Resource": {
              "Fn::GetAtt": [
                "vpcflowlogsroleA49E581D",
                "Arn"
              ]
            }
          }
        ],
        "Version": "2012-10-17"
      },
      "PolicyName": "vpcflowlogsroleDefaultPolicyAAD1B3D4",
      "Roles": [
        {
          "Ref": "vpcflowlogsroleA49E581D"
        }
      ]
    },
    "Metadata": {
      "aws:cdk:path": "gitpod-cell/vpc-flow-logs-role/DefaultPolicy/Resource"
    }
  }
}
{
  "key": "registryfacadepolicyD3B21BD1",
  "value": {
    "Type": "AWS::IAM::ManagedPolicy",
    "Properties": {
      "PolicyDocument": {
        "Statement": [
          {
            "Action": [
              "ecr:BatchCheckLayerAvailability",
              "ecr:BatchGetImage",
              "ecr:GetDownloadUrlForLayer",
              "ecr:GetAuthorizationToken"
            ],
            "Effect": "Allow",
            "Resource": [
              {
                "Fn::GetAtt": [
                  "baseimagebuildrepoD634AA75",
                  "Arn"
                ]
              },
              {
                "Fn::GetAtt": [
                  "workspaceimagebuildrepo9C4DE89D",
                  "Arn"
                ]
              }
            ]
          }
        ],
        "Version": "2012-10-17"
      },
      "Description": "",
      "Path": "/"
    },
    "Metadata": {
      "aws:cdk:path": "gitpod-cell/registry-facade-policy/Resource"
    }
  }
}
{
  "key": "imagebuilderpolicy98A11844",
  "value": {
    "Type": "AWS::IAM::ManagedPolicy",
    "Properties": {
      "PolicyDocument": {
        "Statement": [
          {
            "Action": [
              "ecr:BatchCheckLayerAvailability",
              "ecr:BatchGetImage",
              "ecr:GetDownloadUrlForLayer",
              "ecr:GetAuthorizationToken",
              "ecr:TagResource",
              "ecr:PutImage",
              "ecr:InitiateLayerUpload",
              "ecr:CompleteLayerUpload",
              "ecr:UploadLayerPart"
            ],
            "Effect": "Allow",
            "Resource": [
              {
                "Fn::GetAtt": [
                  "baseimagebuildrepoD634AA75",
                  "Arn"
                ]
              },
              {
                "Fn::GetAtt": [
                  "workspaceimagebuildrepo9C4DE89D",
                  "Arn"
                ]
              }
            ]
          }
        ],
        "Version": "2012-10-17"
      },
      "Description": "",
      "Path": "/"
    },
    "Metadata": {
      "aws:cdk:path": "gitpod-cell/image-builder-policy/Resource"
    }
  }
}
{
  "key": "ecrpullsecretpolicy3C12CB71",
  "value": {
    "Type": "AWS::IAM::ManagedPolicy",
    "Properties": {
      "PolicyDocument": {
        "Statement": [
          {
            "Action": [
              "ecr:BatchCheckLayerAvailability",
              "ecr:BatchGetImage",
              "ecr:GetDownloadUrlForLayer",
              "ecr:GetAuthorizationToken"
            ],
            "Effect": "Allow",
            "Resource": [
              {
                "Fn::GetAtt": [
                  "baseimagebuildrepoD634AA75",
                  "Arn"
                ]
              },
              {
                "Fn::GetAtt": [
                  "workspaceimagebuildrepo9C4DE89D",
                  "Arn"
                ]
              }
            ]
          },
          {
            "Action": [
              "ecr:BatchImportUpstreamImage",
              "ecr:DescribeRegistry",
              "ecr:GetAuthorizationToken"
            ],
            "Effect": "Allow",
            "Resource": "*"
          }
        ],
        "Version": "2012-10-17"
      },
      "Description": "",
      "Path": "/"
    },
    "Metadata": {
      "aws:cdk:path": "gitpod-cell/ecr-pull-secret-policy/Resource"
    }
  }
}
{
  "key": "rdsdbconnectserver0C78DEEF",
  "value": {
    "Type": "AWS::IAM::ManagedPolicy",
    "Properties": {
      "PolicyDocument": {
        "Statement": [
          {
            "Action": "rds-db:connect",
            "Effect": "Allow",
            "Resource": {
              "Fn::Sub": [
                "arn:aws:rds-db:${region}:${accountID}:dbuser:${dbInstance}/gitpod",
                {
                  "accountID": {
                    "Ref": "AWS::AccountId"
                  },
                  "dbInstance": {
                    "Ref": "gitpoddbAD7CE160"
                  },
                  "region": {
                    "Ref": "AWS::Region"
                  }
                }
              ]
            }
          }
        ],
        "Version": "2012-10-17"
      },
      "Description": "Policy used by webapp components to access the database",
      "Path": "/"
    },
    "Metadata": {
      "aws:cdk:path": "gitpod-cell/rds-db-connect-server/Resource"
    }
  }
}
{
  "key": "contentserviceroleF6B3E425",
  "value": {
    "Type": "AWS::IAM::ManagedPolicy",
    "Properties": {
      "PolicyDocument": {
        "Statement": [
          {
            "Action": [
              "s3:ListObjects",
              "s3:ListObjectsV2",
              "s3:ListBucketMultipartUploads",
              "s3:DeleteObjectVersion",
              "s3:ListBucketVersions",
              "s3:GetObjectAttributes",
              "s3:ListBucket",
              "s3:GetObjectVersionAttributes",
              "s3:ListMultipartUploadParts",
              "s3:PutObject",
              "s3:GetObjectAcl",
              "s3:GetObject",
              "s3:AbortMultipartUpload",
              "s3:PutObjectVersionAcl",
              "s3:DeleteObject",
              "s3:PutObjectAcl",
              "s3:GetObjectVersion"
            ],
            "Effect": "Allow",
            "Resource": {
              "Fn::Join": [
                "",
                [
                  {
                    "Fn::GetAtt": [
                      "contentservicebucketD68A2057",
                      "Arn"
                    ]
                  },
                  "/*"
                ]
              ]
            }
          }
        ],
        "Version": "2012-10-17"
      },
      "Description": "",
      "Path": "/"
    },
    "Metadata": {
      "aws:cdk:path": "gitpod-cell/content-service-role/Resource"
    }
  }
}
{
  "key": "prometheuspolicy8961D7A5",
  "value": {
    "Type": "AWS::IAM::ManagedPolicy",
    "Properties": {
      "PolicyDocument": {
        "Statement": [
          {
            "Action": [
              "aps:RemoteWrite",
              "aps:GetSeries",
              "aps:GetLabels",
              "aps:GetMetricsMetadata"
            ],
            "Effect": "Allow",
            "Resource": {
              "Fn::GetAtt": [
                "prometheus",
                "Arn"
              ]
            }
          }
        ],
        "Version": "2012-10-17"
      },
      "Description": "",
      "ManagedPolicyName": "foobar-prometheus",
      "Path": "/"
    },
    "Metadata": {
      "aws:cdk:path": "gitpod-cell/prometheus-policy/Resource"
    }
  }
}
{
  "key": "grafanapolicy3E79243C",
  "value": {
    "Type": "AWS::IAM::ManagedPolicy",
    "Properties": {
      "PolicyDocument": {
        "Statement": [
          {
            "Action": [
              "aps:QueryMetrics",
              "aps:GetSeries",
              "aps:GetLabels",
              "aps:GetMetricsMetadata"
            ],
            "Effect": "Allow",
            "Resource": {
              "Fn::GetAtt": [
                "prometheus",
                "Arn"
              ]
            }
          }
        ],
        "Version": "2012-10-17"
      },
      "Description": "",
      "ManagedPolicyName": "foobar-grafana",
      "Path": "/"
    },
    "Metadata": {
      "aws:cdk:path": "gitpod-cell/grafana-policy/Resource"
    }
  }
}
{
  "key": "usagepolicy71D05CC3",
  "value": {
    "Type": "AWS::IAM::ManagedPolicy",
    "Properties": {
      "PolicyDocument": {
        "Statement": [
          {
            "Action": [
              "s3:ListObjects",
              "s3:ListObjectsV2",
              "s3:ListBucketMultipartUploads",
              "s3:DeleteObjectVersion",
              "s3:ListBucketVersions",
              "s3:GetObjectAttributes",
              "s3:ListBucket",
              "s3:GetObjectVersionAttributes",
              "s3:ListMultipartUploadParts",
              "s3:PutObject",
              "s3:GetObjectAcl",
              "s3:GetObject",
              "s3:AbortMultipartUpload",
              "s3:PutObjectVersionAcl",
              "s3:DeleteObject",
              "s3:PutObjectAcl",
              "s3:GetObjectVersion"
            ],
            "Effect": "Allow",
            "Resource": {
              "Fn::Join": [
                "",
                [
                  {
                    "Fn::GetAtt": [
                      "usagebucket853837BC",
                      "Arn"
                    ]
                  },
                  "/*"
                ]
              ]
            }
          }
        ],
        "Version": "2012-10-17"
      },
      "Description": "Read/write access to usage bucket",
      "ManagedPolicyName": "foobar-usage",
      "Path": "/"
    },
    "Metadata": {
      "aws:cdk:path": "gitpod-cell/usage-policy/Resource"
    }
  }
}
{
  "key": "dynamodbaccessrw2116470B",
  "value": {
    "Type": "AWS::IAM::ManagedPolicy",
    "Properties": {
      "PolicyDocument": {
        "Statement": [
          {
            "Action": [
              "dynamodb:DescribeTable",
              "dynamodb:Query",
              "dynamodb:GetItem",
              "dynamodb:PartiQLSelect",
              "dynamodb:PutItem",
              "dynamodb:UpdateItem",
              "dynamodb:DescribeStream",
              "dynamodb:GetRecords",
              "dynamodb:GetShardIterator",
              "dynamodb:ListStreams"
            ],
            "Effect": "Allow",
            "Resource": [
              {
                "Fn::GetAtt": [
                  "dynamotableresourcesF8FA6E47",
                  "Arn"
                ]
              },
              {
                "Fn::GetAtt": [
                  "dynamotableresourcesF8FA6E47",
                  "StreamArn"
                ]
              }
            ]
          }
        ],
        "Version": "2012-10-17"
      },
      "Description": "used by the Gitpod Dedicated lambdas to access DynamoDB",
      "Path": "/",
      "Roles": [
        {
          "Ref": "lambdafunctioncontrollerroleF57C0FDD"
        },
        {
          "Ref": "clustercontrollereksctlroleC1C3C3FD"
        },
        {
          "Ref": "lambdaclusterctrldcroleAEB16FDF"
        },
        {
          "Ref": "lambdaappcontrollerroleDE5D3901"
        },
        {
          "Ref": "lambdacellstatecontrollerroleFAFF62D3"
        }
      ]
    },
    "Metadata": {
      "aws:cdk:path": "gitpod-cell/dynamodb-access-rw/Resource"
    }
  }
}
{
  "key": "lambdaappcontrollerroleDE5D3901",
  "value": {
    "Type": "AWS::IAM::Role",
    "Properties": {
      "AssumeRolePolicyDocument": {
        "Statement": [
          {
            "Action": "sts:AssumeRole",
            "Effect": "Allow",
            "Principal": {
              "Service": "lambda.amazonaws.com"
            }
          }
        ],
        "Version": "2012-10-17"
      },
      "ManagedPolicyArns": [
        "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
      ]
    },
    "Metadata": {
      "aws:cdk:path": "gitpod-cell/lambda-app-controller-role/Resource"
    }
  }
}
{
  "key": "lambdafunctioncontrollerroleF57C0FDD",
  "value": {
    "Type": "AWS::IAM::Role",
    "Properties": {
      "AssumeRolePolicyDocument": {
        "Statement": [
          {
            "Action": "sts:AssumeRole",
            "Effect": "Allow",
            "Principal": {
              "Service": "lambda.amazonaws.com"
            }
          }
        ],
        "Version": "2012-10-17"
      },
      "ManagedPolicyArns": [
        "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
      ]
    },
    "Metadata": {
      "aws:cdk:path": "gitpod-cell/lambda-function-controller-role/Resource"
    }
  }
}
{
  "key": "functioncontrollercanaccessssmC9F8DA3A",
  "value": {
    "Type": "AWS::IAM::Policy",
    "Properties": {
      "PolicyDocument": {
        "Statement": [
          {
            "Action": [
              "ssm:GetParameter",
              "ssm:GetParameters"
            ],
            "Effect": "Allow",
            "Resource": {
              "Fn::Sub": [
                "arn:aws:ssm:${region}:${accountID}:parameter/*",
                {
                  "accountID": {
                    "Ref": "AWS::AccountId"
                  },
                  "region": {
                    "Ref": "AWS::Region"
                  }
                }
              ]
            }
          },
          {
            "Action": "lambda:UpdateFunctionCode",
            "Effect": "Allow",
            "Resource": {
              "Fn::Sub": [
                "arn:aws:lambda:${region}:${accountID}:function:*",
                {
                  "accountID": {
                    "Ref": "AWS::AccountId"
                  },
                  "region": {
                    "Ref": "AWS::Region"
                  }
                }
              ]
            }
          }
        ],
        "Version": "2012-10-17"
      },
      "PolicyName": "functioncontrollercanaccessssmC9F8DA3A",
      "Roles": [
        {
          "Ref": "lambdafunctioncontrollerroleF57C0FDD"
        }
      ]
    },
    "Metadata": {
      "aws:cdk:path": "gitpod-cell/function-controller-can-access-ssm/Resource"
    }
  }
}
{
  "key": "lambdaclusterctrlsfnrole9C1CFAD7",
  "value": {
    "Type": "AWS::IAM::Role",
    "Properties": {
      "AssumeRolePolicyDocument": {
        "Statement": [
          {
            "Action": "sts:AssumeRole",
            "Effect": "Allow",
            "Principal": {
              "Service": {
                "Fn::FindInMap": [
                  "ServiceprincipalMap",
                  {
                    "Ref": "AWS::Region"
                  },
                  "states"
                ]
              }
            }
          }
        ],
        "Version": "2012-10-17"
      }
    },
    "Metadata": {
      "aws:cdk:path": "gitpod-cell/lambda-cluster-ctrl-sfn-role/Resource"
    }
  }
}
{
  "key": "lambdaclusterctrlsfnrolepolicy957C7A7C",
  "value": {
    "Type": "AWS::IAM::Policy",
    "Properties": {
      "PolicyDocument": {
        "Statement": [
          {
            "Action": [
              "logs:CreateLogDelivery",
              "logs:GetLogDelivery",
              "logs:UpdateLogDelivery",
              "logs:DeleteLogDelivery",
              "logs:ListLogDeliveries",
              "logs:PutLogEvents",
              "logs:PutResourcePolicy",
              "logs:DescribeResourcePolicies",
              "logs:DescribeLogGroups"
            ],
            "Effect": "Allow",
            "Resource": "*"
          },
          {
            "Action": [
              "events:PutTargets",
              "events:PutRule",
              "events:DescribeRule"
            ],
            "Effect": "Allow",
            "Resource": {
              "Fn::Sub": [
                "arn:aws:events:${region}:${accountID}:rule/StepFunctionsGetEventsForECSTaskRule",
                {
                  "accountID": {
                    "Ref": "AWS::AccountId"
                  },
                  "region": {
                    "Ref": "AWS::Region"
                  }
                }
              ]
            }
          },
          {
            "Action": [
              "states:DescribeExecution",
              "states:StopExecution",
              "states:StartExecution"
            ],
            "Effect": "Allow",
            "Resource": "*"
          }
        ],
        "Version": "2012-10-17"
      },
      "PolicyName": "lambdaclusterctrlsfnrolepolicy957C7A7C",
      "Roles": [
        {
          "Ref": "lambdaclusterctrlsfnrole9C1CFAD7"
        }
      ]
    },
    "Metadata": {
      "aws:cdk:path": "gitpod-cell/lambda-cluster-ctrl-sfn-role-policy/Resource"
    }
  }
}
{
  "key": "clustercontrollertaskroleC42D05B1",
  "value": {
    "Type": "AWS::IAM::Role",
    "Properties": {
      "AssumeRolePolicyDocument": {
        "Statement": [
          {
            "Action": "sts:AssumeRole",
            "Effect": "Allow",
            "Principal": {
              "Service": "ecs-tasks.amazonaws.com"
            }
          }
        ],
        "Version": "2012-10-17"
      }
    },
    "Metadata": {
      "aws:cdk:path": "gitpod-cell/cluster-controller-task-role/Resource"
    }
  }
}
{
  "key": "clustercontrollertaskrolepolicy4515677B",
  "value": {
    "Type": "AWS::IAM::Policy",
    "Properties": {
      "PolicyDocument": {
        "Statement": [
          {
            "Action": [
              "logs:CreateLogStream",
              "logs:PutLogEvents"
            ],
            "Effect": "Allow",
            "Resource": {
              "Fn::GetAtt": [
                "clustercontrollertaskslogs3E649D7D",
                "Arn"
              ]
            }
          }
        ],
        "Version": "2012-10-17"
      },
      "PolicyName": "clustercontrollertaskrolepolicy4515677B",
      "Roles": [
        {
          "Ref": "clustercontrollertaskroleC42D05B1"
        }
      ]
    },
    "Metadata": {
      "aws:cdk:path": "gitpod-cell/cluster-controller-task-role-policy/Resource"
    }
  }
}
{
  "key": "clustercontrollereksctlroleC1C3C3FD",
  "value": {
    "Type": "AWS::IAM::Role",
    "Properties": {
      "AssumeRolePolicyDocument": {
        "Statement": [
          {
            "Action": "sts:AssumeRole",
            "Effect": "Allow",
            "Principal": {
              "Service": "ecs-tasks.amazonaws.com"
            }
          }
        ],
        "Version": "2012-10-17"
      },
      "ManagedPolicyArns": [
        "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole",
        "arn:aws:iam::aws:policy/AmazonEC2FullAccess"
      ]
    },
    "Metadata": {
      "aws:cdk:path": "gitpod-cell/cluster-controller-eksctl-role/Resource"
    }
  }
}
{
  "key": "clustercontrollereksctlroleDefaultPolicyC8CE6A0B",
  "value": {
    "Type": "AWS::IAM::Policy",
    "Properties": {
      "PolicyDocument": {
        "Statement": [
          {
            "Action": [
              "ecr:BatchCheckLayerAvailability",
              "ecr:GetDownloadUrlForLayer",
              "ecr:BatchGetImage"
            ],
            "Effect": "Allow",
            "Resource": {
              "Fn::Sub": [
                "arn:aws:ecr:${region}:096840763576:repository/poc/lambda-cluster",
                {
                  "region": {
                    "Ref": "AWS::Region"
                  }
                }
              ]
            }
          },
          {
            "Action": "ecr:GetAuthorizationToken",
            "Effect": "Allow",
            "Resource": "*"
          },
          {
            "Action": [
              "logs:CreateLogStream",
              "logs:PutLogEvents"
            ],
            "Effect": "Allow",
            "Resource": {
              "Fn::GetAtt": [
                "clustercontrollertaskslogs3E649D7D",
                "Arn"
              ]
            }
          }
        ],
        "Version": "2012-10-17"
      },
      "PolicyName": "clustercontrollereksctlroleDefaultPolicyC8CE6A0B",
      "Roles": [
        {
          "Ref": "clustercontrollereksctlroleC1C3C3FD"
        }
      ]
    },
    "Metadata": {
      "aws:cdk:path": "gitpod-cell/cluster-controller-eksctl-role/DefaultPolicy/Resource"
    }
  }
}
{
  "key": "clustercontrollereksctlrolepolicy7884FB7E",
  "value": {
    "Type": "AWS::IAM::Policy",
    "Properties": {
      "PolicyDocument": {
        "Statement": [
          {
            "Action": "ssm:PutParameter",
            "Effect": "Allow",
            "Resource": {
              "Fn::Sub": [
                "arn:aws:ssm:${region}:${accountID}:parameter/cell/foobar/*",
                {
                  "accountID": {
                    "Ref": "AWS::AccountId"
                  },
                  "region": {
                    "Ref": "AWS::Region"
                  }
                }
              ]
            }
          },
          {
            "Action": [
              "ssm:GetParameter",
              "ssm:GetParameters"
            ],
            "Effect": "Allow",
            "Resource": {
              "Fn::Sub": [
                "arn:aws:ssm:${region}:${accountID}:parameter/aws/*",
                {
                  "accountID": {
                    "Ref": "AWS::AccountId"
                  },
                  "region": {
                    "Ref": "AWS::Region"
                  }
                }
              ]
            }
          },
          {
            "Action": "cloudformation:*",
            "Effect": "Allow",
            "Resource": "*"
          },
          {
            "Action": "eks:*",
            "Effect": "Allow",
            "Resource": "*"
          },
          {
            "Action": [
              "kms:CreateGrant",
              "kms:DescribeKey"
            ],
            "Effect": "Allow",
            "Resource": "*"
          },
          {
            "Action": "logs:PutRetentionPolicy",
            "Effect": "Allow",
            "Resource": "*"
          },
          {
            "Action": [
              "iam:CreateInstanceProfile",
              "iam:DeleteInstanceProfile",
              "iam:GetInstanceProfile",
              "iam:RemoveRoleFromInstanceProfile",
              "iam:GetRole",
              "iam:CreateRole",
              "iam:DeleteRole",
              "iam:AttachRolePolicy",
              "iam:PutRolePolicy",
              "iam:ListInstanceProfiles",
              "iam:AddRoleToInstanceProfile",
              "iam:ListInstanceProfilesForRole",
              "iam:PassRole",
              "iam:DetachRolePolicy",
              "iam:DeleteRolePolicy",
              "iam:GetRolePolicy",
              "iam:GetOpenIDConnectProvider",
              "iam:CreateOpenIDConnectProvider",
              "iam:DeleteOpenIDConnectProvider",
              "iam:TagOpenIDConnectProvider",
              "iam:ListAttachedRolePolicies",
              "iam:TagRole",
              "iam:GetPolicy",
              "iam:CreatePolicy",
              "iam:DeletePolicy",
              "iam:ListPolicyVersions"
            ],
            "Effect": "Allow",
            "Resource": [
              {
                "Fn::Sub": [
                  "arn:aws:iam::${accountID}:instance-profile/eksctl-*",
                  {
                    "accountID": {
                      "Ref": "AWS::AccountId"
                    },
                    "region": {
                      "Ref": "AWS::Region"
                    }
                  }
                ]
              },
              {
                "Fn::Sub": [
                  "arn:aws:iam::${accountID}:role/eksctl-*",
                  {
                    "accountID": {
                      "Ref": "AWS::AccountId"
                    },
                    "region": {
                      "Ref": "AWS::Region"
                    }
                  }
                ]
              },
              {
                "Fn::Sub": [
                  "arn:aws:iam::${accountID}:policy/eksctl-*",
                  {
                    "accountID": {
                      "Ref": "AWS::AccountId"
                    },
                    "region": {
                      "Ref": "AWS::Region"
                    }
                  }
                ]
              },
              {
                "Fn::Sub": [
                  "arn:aws:iam::${accountID}:oidc-provider/*",
                  {
                    "accountID": {
                      "Ref": "AWS::AccountId"
                    },
                    "region": {
                      "Ref": "AWS::Region"
                    }
                  }
                ]
              },
              {
                "Fn::Sub": [
                  "arn:aws:iam::${accountID}:role/aws-service-role/eks-nodegroup.amazonaws.com/AWSServiceRoleForAmazonEKSNodegroup",
                  {
                    "accountID": {
                      "Ref": "AWS::AccountId"
                    },
                    "region": {
                      "Ref": "AWS::Region"
                    }
                  }
                ]
              },
              {
                "Fn::Sub": [
                  "arn:aws:iam::${accountID}:role/eksctl-managed-*",
                  {
                    "accountID": {
                      "Ref": "AWS::AccountId"
                    },
                    "region": {
                      "Ref": "AWS::Region"
                    }
                  }
                ]
              },
              {
                "Fn::Sub": [
                  "arn:aws:iam::${accountID}:role/foobar*",
                  {
                    "accountID": {
                      "Ref": "AWS::AccountId"
                    },
                    "region": {
                      "Ref": "AWS::Region"
                    }
                  }
                ]
              }
            ]
          },
          {
            "Action": "iam:GetRole",
            "Effect": "Allow",
            "Resource": {
              "Fn::Sub": [
                "arn:aws:iam::${accountID}:role/*",
                {
                  "accountID": {
                    "Ref": "AWS::AccountId"
                  },
                  "region": {
                    "Ref": "AWS::Region"
                  }
                }
              ]
            }
          },
          {
            "Action": "iam:CreateServiceLinkedRole",
            "Effect": "Allow",
            "Resource": "*"
          }
        ],
        "Version": "2012-10-17"
      },
      "PolicyName": "clustercontrollereksctlrolepolicy7884FB7E",
      "Roles": [
        {
          "Ref": "clustercontrollereksctlroleC1C3C3FD"
        }
      ]
    },
    "Metadata": {
      "aws:cdk:path": "gitpod-cell/cluster-controller-eksctl-role-policy/Resource"
    }
  }
}
{
  "key": "lambdaclusterctrlsfnroleexecpolicyA791C5AD",
  "value": {
    "Type": "AWS::IAM::Policy",
    "Properties": {
      "PolicyDocument": {
        "Statement": [
          {
            "Action": "ecs:RunTask",
            "Effect": "Allow",
            "Resource": {
              "Ref": "clustercontrollertaskB80858A6"
            }
          },
          {
            "Action": "iam:PassRole",
            "Effect": "Allow",
            "Resource": [
              {
                "Fn::GetAtt": [
                  "clustercontrollertaskroleC42D05B1",
                  "Arn"
                ]
              },
              {
                "Fn::GetAtt": [
                  "clustercontrollereksctlroleC1C3C3FD",
                  "Arn"
                ]
              }
            ]
          }
        ],
        "Version": "2012-10-17"
      },
      "PolicyName": "lambdaclusterctrlsfnroleexecpolicyA791C5AD",
      "Roles": [
        {
          "Ref": "lambdaclusterctrlsfnrole9C1CFAD7"
        }
      ]
    },
    "Metadata": {
      "aws:cdk:path": "gitpod-cell/lambda-cluster-ctrl-sfn-role-exec-policy/Resource"
    }
  }
}
{
  "key": "lambdaclusterctrldcroleAEB16FDF",
  "value": {
    "Type": "AWS::IAM::Role",
    "Properties": {
      "AssumeRolePolicyDocument": {
        "Statement": [
          {
            "Action": "sts:AssumeRole",
            "Effect": "Allow",
            "Principal": {
              "Service": "lambda.amazonaws.com"
            }
          }
        ],
        "Version": "2012-10-17"
      },
      "ManagedPolicyArns": [
        "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
      ]
    },
    "Metadata": {
      "aws:cdk:path": "gitpod-cell/lambda-cluster-ctrl-dc-role/Resource"
    }
  }
}
{
  "key": "lambdaclusterctrldcpolicyB13892E2",
  "value": {
    "Type": "AWS::IAM::Policy",
    "Properties": {
      "PolicyDocument": {
        "Statement": [
          {
            "Action": [
              "ssm:GetParameter",
              "ssm:GetParameters",
              "ssm:PutParameter"
            ],
            "Effect": "Allow",
            "Resource": {
              "Fn::Sub": [
                "arn:aws:ssm:${region}:${accountID}:parameter/*",
                {
                  "accountID": {
                    "Ref": "AWS::AccountId"
                  },
                  "region": {
                    "Ref": "AWS::Region"
                  }
                }
              ]
            }
          },
          {
            "Action": [
              "ec2:DescribeVpcs",
              "ec2:DescribeSubnets",
              "ec2:DescribeImages"
            ],
            "Effect": "Allow",
            "Resource": "*"
          },
          {
            "Action": "states:StartExecution",
            "Effect": "Allow",
            "Resource": {
              "Fn::Sub": [
                "arn:aws:states:${region}:${accountID}:stateMachine:*",
                {
                  "accountID": {
                    "Ref": "AWS::AccountId"
                  },
                  "region": {
                    "Ref": "AWS::Region"
                  }
                }
              ]
            }
          }
        ],
        "Version": "2012-10-17"
      },
      "PolicyName": "lambdaclusterctrldcpolicyB13892E2",
      "Roles": [
        {
          "Ref": "lambdaclusterctrldcroleAEB16FDF"
        }
      ]
    },
    "Metadata": {
      "aws:cdk:path": "gitpod-cell/lambda-cluster-ctrl-dc-policy/Resource"
    }
  }
}
{
  "key": "lambdaappctrlpolicyF8E18B9E",
  "value": {
    "Type": "AWS::IAM::Policy",
    "Properties": {
      "PolicyDocument": {
        "Statement": [
          {
            "Action": [
              "ssm:GetParameter",
              "ssm:GetParameters",
              "ssm:PutParameter"
            ],
            "Effect": "Allow",
            "Resource": {
              "Fn::Sub": [
                "arn:aws:ssm:${region}:${accountID}:parameter/*",
                {
                  "accountID": {
                    "Ref": "AWS::AccountId"
                  },
                  "region": {
                    "Ref": "AWS::Region"
                  }
                }
              ]
            }
          },
          {
            "Action": "s3:GetObject",
            "Effect": "Allow",
            "Resource": "arn:aws:s3:::foobar/*"
          }
        ],
        "Version": "2012-10-17"
      },
      "PolicyName": "lambdaappctrlpolicyF8E18B9E",
      "Roles": [
        {
          "Ref": "lambdaappcontrollerroleDE5D3901"
        }
      ]
    },
    "Metadata": {
      "aws:cdk:path": "gitpod-cell/lambda-app-ctrl-policy/Resource"
    }
  }
}
{
  "key": "lambdacellstatecontrollerroleFAFF62D3",
  "value": {
    "Type": "AWS::IAM::Role",
    "Properties": {
      "AssumeRolePolicyDocument": {
        "Statement": [
          {
            "Action": "sts:AssumeRole",
            "Effect": "Allow",
            "Principal": {
              "Service": "lambda.amazonaws.com"
            }
          }
        ],
        "Version": "2012-10-17"
      },
      "ManagedPolicyArns": [
        "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
      ]
    },
    "Metadata": {
      "aws:cdk:path": "gitpod-cell/lambda-cellstate-controller-role/Resource"
    }
  }
}
{
  "key": "cellstatecontrollercanaccessssm288FE590",
  "value": {
    "Type": "AWS::IAM::Policy",
    "Properties": {
      "PolicyDocument": {
        "Statement": [
          {
            "Action": [
              "ssm:GetParameter",
              "ssm:GetParameters"
            ],
            "Effect": "Allow",
            "Resource": {
              "Fn::Sub": [
                "arn:aws:ssm:${region}:${accountID}:parameter/*",
                {
                  "accountID": {
                    "Ref": "AWS::AccountId"
                  },
                  "region": {
                    "Ref": "AWS::Region"
                  }
                }
              ]
            }
          },
          {
            "Action": [
              "secretsmanager:CreateSecret",
              "secretsmanager:PutSecretValue",
              "secretsmanager:GetSecretValue"
            ],
            "Effect": "Allow",
            "Resource": {
              "Fn::Sub": [
                "arn:aws:secretsmanager:${region}:${accountID}:secret:/gitpod/substrate/foobar/*",
                {
                  "accountID": {
                    "Ref": "AWS::AccountId"
                  },
                  "region": {
                    "Ref": "AWS::Region"
                  }
                }
              ]
            }
          }
        ],
        "Version": "2012-10-17"
      },
      "PolicyName": "cellstatecontrollercanaccessssm288FE590",
      "Roles": [
        {
          "Ref": "lambdacellstatecontrollerroleFAFF62D3"
        }
      ]
    },
    "Metadata": {
      "aws:cdk:path": "gitpod-cell/cellstate-controller-can-access-ssm/Resource"
    }
  }
}
```

</details>

</div>

</details>

<details>

<summary class="text-p-medium mt-8 text-important"><b>Debugging role that can be assumed by the customer only</b></summary>

<div class="ml-4 mt-2">

In extraordinary circumstances, it may be necessary to perform certain operations within the AWS account of the Gitpod Dedicated instance. Only the customer is able to access this, and thus a Gitpod employee may ask a Customer to assume this role. Please see [Getting Access to the Instance for Debugging](/docs/gitpod-dedicated/guides/getting-access-to-the-instance-for-debugging) for more information.

This role is called `gitpod-customer-debug-access-role` and is created when applying the CloudFormation template to install Gitpod. This role includes two sets of permissions:

-   **Read-only access to the AWS account a Gitpod Dedicated instance is running:** This read only access is defined by the default AWS managed policy `arn:aws:iam::aws:policy/ReadOnlyAccess` which grants read-only access to all AWS resources and services within an account.
-   **Read and write access to the Kubernetes clusters that are used to run Gitpod:** Gives the customer (_not_ Gitpod!) `kubectl` access to the Kubernetes clusters used to run Gitpod.

</div>

</details>
