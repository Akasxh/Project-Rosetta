def get_feature_contributions(model, instance, feature_names, class_names):
    """
    Calculate feature contributions for Gaussian Naive Bayes model
    """
    import numpy as np
    import pandas as pd
    
    # Get the predicted class
    predicted_class = model.predict([instance])[0]
    
    contributions = []
    
    for i, feature_value in enumerate(instance):
        # Use var_ instead of sigma_ for newer scikit-learn versions
        if hasattr(model, 'var_'):
            variance = model.var_
        elif hasattr(model, 'sigma_'):
            variance = model.sigma_
        else:
            # Fallback: calculate variance from class statistics
            variance = np.var(model.theta_, axis=0, keepdims=True)
        
        # Use theta_ for means
        means = model.theta_
        
        # Calculate the log-likelihood for each class
        log_likelihood_class_0 = -0.5 * np.log(2 * np.pi * variance[0, i]) - \
                                 ((feature_value - means[0, i]) ** 2 / (2 * variance[0, i]))
        log_likelihood_class_1 = -0.5 * np.log(2 * np.pi * variance[1, i]) - \
                                 ((feature_value - means[1, i]) ** 2 / (2 * variance[1, i]))
        
        # The contribution is the absolute difference in log-likelihoods
        contribution = abs(log_likelihood_class_1 - log_likelihood_class_0)
        contributions.append((feature_names[i], contribution))
    
    # Sort by contribution (descending)
    contributions.sort(key=lambda x: x[1], reverse=True)
    
    # Create DataFrame with top features
    top_features_df = pd.DataFrame(contributions[:10], columns=['Feature', 'Contribution'])
    
    return top_features_df, class_names[predicted_class]