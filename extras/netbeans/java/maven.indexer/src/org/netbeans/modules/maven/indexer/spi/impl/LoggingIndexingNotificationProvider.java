/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
package org.netbeans.modules.maven.indexer.spi.impl;

import java.util.logging.Logger;
import org.netbeans.modules.maven.indexer.api.RepositoryInfo;
import org.netbeans.modules.maven.indexer.api.RepositoryPreferences;
import org.openide.util.lookup.ServiceProvider;

/**
 * Dummy impl to retain old behavior.
 * 
 * Can be removed once all maven-indexer users have their own implementation.
 * 
 * @author mbien
 */
@ServiceProvider(service=IndexingNotificationProvider.class, position=Integer.MAX_VALUE)
public class LoggingIndexingNotificationProvider implements IndexingNotificationProvider {

    private static final Logger LOG = Logger.getLogger(LoggingIndexingNotificationProvider.class.getName());
    
    @Override
    public void notifyError(String message) {
        LOG.severe(message);
    }

    @Override
    public void requestPermissionsFor(RepositoryInfo repo) {
        RepositoryPreferences.allowIndexDownloadFor(repo); // old behavior did simply allow all downloads
    }

}
