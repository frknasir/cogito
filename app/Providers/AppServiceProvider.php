<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Database\Eloquent\Relations\Relation;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
		if (env('HOSTING') === 'azure') {
			$this->app->bind('path.public', function() {
				return env('AZURE_PUBLIC_PATH');
			});
		}
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Relation::morphMap([
            'state' => 'App\State',
            'localGovernment' => 'App\LocalGovernment'
		]);
    }
}
